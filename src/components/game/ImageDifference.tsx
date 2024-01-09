import { createSignal } from 'solid-js';
import SingleImage from './SingleImage';

export const [circleSize, setCircleSize] = createSignal(30);
export const [circles, setCircles] = createSignal<CircleData[]>([]);
export const [mistakes, setMistakes] = createSignal<number>(0);

const ImageDifference = (data: DifferenceMetadata) => {
  return (
    <div class="flex gap-[10px]">
      <SingleImage left data={data} />
      <SingleImage data={data} />
    </div>
  );
};

export default ImageDifference;
