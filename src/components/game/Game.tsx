import ImageDifference from './ImageDifference';

type Props = {
  data: DifferenceMetadata;
};

const Game = (props: Props) => {
  return (
    <div class="dark:bg-gray-900 flex justify-center items-center">
      <div class="max-w-[2000px]">
        <ImageDifference {...props.data} />
      </div>
    </div>
  );
};

export default Game;
