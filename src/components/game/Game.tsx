import { createEffect } from 'solid-js';
import { mistakesLeft } from '../../state/game';
import { resultModal } from '../../state/modals';
import GameResult from '../modals/GameResult';
import ImageDifference from './ImageDifference';

type Props = {
  data: DifferenceMetadata;
};

const Game = (props: Props) => {
  createEffect(() => {
    if (mistakesLeft() === 0) {
      resultModal()?.show();
    }
  });

  return (
    <div class="dark:bg-gray-900 flex justify-center items-center">
      <div class="max-w-[2000px]">
        <ImageDifference {...props.data} />
        <GameResult />
      </div>
    </div>
  );
};

export default Game;
