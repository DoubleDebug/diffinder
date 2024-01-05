import { For, createMemo, createSignal } from "solid-js";
import styles from "./SingleImage.module.css";

type Props = {
  data: DifferenceMetadata;
  left?: boolean;
};

const SingleImage = (props: Props) => {
  const circleSize = 20;
  const [circles, setCircles] = createSignal<Position[]>([]);
  const imageRef = (image: HTMLImageElement) => {
    image.onload = () => {
      setCircles(
        props.data.differences.map((diff) => {
          const top = diff.y * (image.clientHeight / image.naturalHeight);
          const left = diff.x * (image.clientWidth / image.naturalWidth);
          return {
            top: `${top - circleSize / 2}px`,
            left: `${left - circleSize / 2}px`,
          };
        })
      );
    };
  };
  const src = createMemo(() => {
    const side = props.left ? "left" : "right";
    return `images/${props.data[`image-${side}`]}`;
  });
  const circleStyle = (circle: Position) => ({
    width: `${circleSize}px`,
    top: circle.top,
    left: circle.left,
  });

  return (
    <div class={styles.container}>
      <img ref={imageRef} class={styles.image} src={src()} />
      <For each={circles()}>
        {(circle) => <div class={styles.circle} style={circleStyle(circle)} />}
      </For>
    </div>
  );
};

export default SingleImage;
