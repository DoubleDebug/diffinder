import { createSignal } from 'solid-js';
import GameScore from './GameScore';
import { getScore } from '../../state/score';

type Props = {
  data: DifferenceMetadata;
};

const ImagePreview = (props: Props) => {
  const { data } = props;
  const [getIsHover, setIsHover] = createSignal(false);
  const link = `/diffinder/games/${props.data.id}`;
  const score = getScore(props.data.id);

  return (
    <div
      class="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-gray-800 hover:bg-gray-700 dark:border-gray-700"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <a class="relative" href={link}>
        <img
          class="p-6 pb-2 rounded-t-lg h-[300px] w-full object-cover"
          src={`/diffinder/images/${data['image-left']}`}
          alt={data.name}
        />
        <span
          class="absolute bottom-2 right-4 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded transition-opacity"
          style={{ opacity: getIsHover() ? 100 : 0 }}
        >
          {data.differences.length} differences
        </span>
        <span
          class="absolute bottom-2 left-6 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded transition-opacity"
          style={{ opacity: getIsHover() ? 100 : 0 }}
        >
          {data.difficulty}
        </span>
      </a>
      <div class="flex px-6 pb-4">
        <div class="flex w-full items-center">
          <div class="grid">
            <div class="flex items-center gap-2">
              <a href={link}>
                <h5 class="text-xl whitespace-nowrap font-semibold tracking-tight text-gray-900 dark:text-white">
                  {data.name}
                </h5>
              </a>
            </div>
            <div class="flex">
              <span class="text-normal text-gray-400">Your score:</span>
              <GameScore score={score} />
            </div>
          </div>
        </div>
        <div class="flex items-end justify-between">
          <a
            href={link}
            class="text-white bg-blue-700 whitespace-nowrap hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Select image
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
