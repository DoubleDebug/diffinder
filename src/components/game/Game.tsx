import GameResult from '../modals/GameResult';
import ImageDifference from './ImageDifference';
import { resultModal } from '../../state/popup';
import { createEffect, onCleanup, onMount } from 'solid-js';
import { GameController } from '../../state/controller';
import {
  differencesLeft,
  mistakesLeft,
  secondsLeft,
  setCircles,
  userGaveUp,
} from '../../state/game';

type Props = {
  data: DifferenceMetadata;
};

const Game = (props: Props) => {
  onMount(() => GameController.startCountdown());
  onCleanup(() => GameController.stopCountdown());

  createEffect(() => {
    if (
      mistakesLeft() === 0 ||
      differencesLeft() === 0 ||
      secondsLeft() === 0 ||
      userGaveUp()
    ) {
      // game over
      resultModal()?.show();
      GameController.stopCountdown();
      setCircles((prev) => prev.map((circle) => ({ ...circle, shown: true })));
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
