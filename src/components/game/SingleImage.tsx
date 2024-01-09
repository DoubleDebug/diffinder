import { For, createMemo } from 'solid-js';
import {
  circleSize,
  circles,
  setCircles,
  setMistakes,
} from './ImageDifference';
import { createRipple } from '../../utils/animations';

type Props = {
  data: DifferenceMetadata;
  left?: boolean;
};

const SingleImage = (props: Props) => {
  let containerRef: HTMLDivElement | undefined = undefined;
  const imageRef = (image: HTMLImageElement) => {
    image.onload = () => {
      setCircles(
        props.data.differences.map((diff, index) => {
          const top = diff.y * (image.clientHeight / image.naturalHeight);
          const left = diff.x * (image.clientWidth / image.naturalWidth);
          return {
            id: index,
            shown: false,
            top: `${top - circleSize() / 2}px`,
            left: `${left - circleSize() / 2}px`,
          };
        })
      );
    };
  };
  const src = createMemo(() => {
    const side = props.left ? 'left' : 'right';
    return `images/${props.data[`image-${side}`]}`;
  });
  const handleClick = (event: MouseEvent) => {
    createRipple(
      event.currentTarget as HTMLDivElement,
      event.clientX,
      event.clientY,
      'mistake'
    );
  };
  const circleStyle = (circle: CircleData) => ({
    width: `${circleSize()}px`,
    top: circle.top,
    left: circle.left,
    'border-width': circle.shown ? '2px' : '0px',
  });

  return (
    <div
      ref={containerRef}
      class="flex relative max-w-full"
      onClick={handleClick}
    >
      <img
        ref={imageRef}
        class="flex max-w-full"
        src={src()}
        onClick={() => setMistakes((prev) => prev + 1)}
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
              copy[index()] = { ...circle, shown: true };
              return copy;
            });
            createRipple(
              containerRef as HTMLDivElement,
              event.clientX,
              event.clientY,
              'success'
            );
          };
          const size = `${circleSize()}px`;
          return (
            <div
              class={`flex w-[${size}] h-[${size}] border-2 border-white border-solid rounded-full absolute z-10`}
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
