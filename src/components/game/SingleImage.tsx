import { For, createMemo, onMount } from 'solid-js';
import { createRipple } from '../../utils/animations';
import {
  setCircles,
  circleSize,
  circles,
  setMistakesLeft,
  setDifferencesLeft,
} from '../../state/game';

type Props = {
  data: DifferenceMetadata;
  left?: boolean;
};

const SingleImage = (props: Props) => {
  let imageId = String(Math.random());
  let containerRef: HTMLDivElement | undefined = undefined;
  let intervalId: any;
  onMount(() => {
    intervalId = setInterval(() => {
      const image = document.getElementById(imageId) as HTMLImageElement | null;
      if (!image) return;
      if (image.clientWidth === 0) return;

      intervalId && clearInterval(intervalId);
      setCircles(
        props.data.differences.map((diff, index) => {
          const top = diff.y * (image.clientHeight / image.naturalHeight);
          const left = diff.x * (image.clientWidth / image.naturalWidth);
          return {
            id: index,
            shown: false,
            top: `${top - circleSize() / 2}px`,
            left: `${left - circleSize() / 2}px`,
            guessed: false,
          };
        })
      );
    }, 100);
  });
  const src = createMemo(() => {
    const side = props.left ? 'left' : 'right';
    return `/images/${props.data[`image-${side}`]}`;
  });
  const handleClick = (event: MouseEvent) => {
    setMistakesLeft((prev) => Math.max(prev - 1, 0));
    createRipple(
      event.currentTarget as HTMLDivElement,
      event.clientX,
      event.clientY,
      'mistake'
    );
  };
  const circleStyle = (circle: CircleData) => ({
    width: `${circleSize()}px`,
    height: `${circleSize()}px`,
    top: circle.top,
    left: circle.left,
    'border-width': circle.shown ? '3px' : '0px',
    'border-color': circle.guessed ? 'limegreen' : 'red',
    animation: circle.guessed ? '' : 'pulse 1s linear infinite',
  });

  return (
    <div
      ref={containerRef}
      class="flex relative max-w-full"
      onClick={handleClick}
    >
      <img
        id={imageId}
        class="flex max-w-full"
        src={src()}
        alt={props.data.name}
      />
      <For each={circles()}>
        {(circle, index) => {
          const onClick = (event: MouseEvent) => {
            if (circles().find((c) => c.id === circle.id)?.shown) {
              event.stopPropagation();
              return;
            }
            setCircles((prev) => {
              const copy = [...prev];
              copy[index()] = { ...circle, shown: true, guessed: true };
              return copy;
            });
            setDifferencesLeft((prev) => prev - 1);
            createRipple(
              containerRef as HTMLDivElement,
              event.clientX,
              event.clientY,
              'success'
            );
          };
          const size = `${circleSize()}px` as const;
          return (
            <div
              class={`flex w-[${size}] h-[${size}] border-2 border-solid rounded-full absolute z-10`}
              onClick={onClick}
              style={circleStyle(circle)}
            />
          );
        }}
      </For>
    </div>
  );
};

export default SingleImage;
