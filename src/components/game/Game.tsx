import GameResult from '../modals/GameResult';
import ImageDifference from './ImageDifference';
import { resultModal } from '../../state/modals';
import { createEffect, onCleanup, onMount } from 'solid-js';
import { GameController } from '../../state/controller';
import { differencesLeft, mistakesLeft, secondsLeft } from '../../state/game';

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
      secondsLeft() === 0
    ) {
      resultModal()?.show();
      GameController.stopCountdown();
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
