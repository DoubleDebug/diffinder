import { createSignal } from "solid-js";
import styles from "./ImageDifference.module.css";
import SingleImage from "./SingleImage";

export const [circleSize, setCircleSize] = createSignal(20);
export const [circles, setCircles] = createSignal<CircleData[]>([]);
export const [mistakes, setMistakes] = createSignal<number>(0);

const ImageDifference = (data: DifferenceMetadata) => {
  return (
    <div class={styles.container}>
      <SingleImage left data={data} />
      <SingleImage data={data} />
    </div>
  );
};

export default ImageDifference;
