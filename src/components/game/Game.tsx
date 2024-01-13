import ImageDifference from './ImageDifference';
import { Modal } from 'flowbite';
import { createEffect } from 'solid-js';
import { MODALS } from '../../utils/modals';
import { mistakesLeft } from '../../state/game';
import Result from './Result';

type Props = {
  data: DifferenceMetadata;
};

const Game = (props: Props) => {
  createEffect(() => {
    if (mistakesLeft() === 0) {
      const resultModal = new Modal(document.getElementById(MODALS.RESULTS));
      resultModal.show();
    }
  });

  return (
    <div class="dark:bg-gray-900 flex justify-center items-center">
      <div class="max-w-[2000px]">
        <ImageDifference {...props.data} />
        <Result />
      </div>
    </div>
  );
};

export default Game;
