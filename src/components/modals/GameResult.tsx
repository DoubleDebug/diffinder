import { Modal } from 'flowbite';
import { MODALS } from '../../utils/modals';
import { useParams } from '@solidjs/router';
import { createMemo, onMount } from 'solid-js';
import { formatSeconds } from '../../utils/time';
import { resultModal, setResultModal } from '../../state/popup';
import {
  differencesLeft,
  game,
  mistakesLeft,
  numOfMistakes,
  numOfSeconds,
  resetGame,
  secondsLeft,
} from '../../state/game';

const GameResult = () => {
  const { id } = useParams();
  const playNextGame = () =>
    (window.location.href = `/games/${Number(id) + 1}`);
  const onClickNext = () => {
    if (differencesLeft() === 0) {
      playNextGame();
    } else {
      resetGame();
    }
    resultModal()?.hide();
  };

  onMount(() => {
    const modal = new Modal(document.getElementById(MODALS.RESULTS));
    setResultModal(modal);
  });

  const percentage = createMemo(() => {
    const data = game();
    if (!data) return '0%';
    const diffFound = data.differences.length - differencesLeft();
    const perc = Math.round((diffFound / data.differences.length) * 100);
    return `${perc}%`;
  });

  return (
    <div
      id={MODALS.RESULTS}
      tabindex="-1"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide={MODALS.RESULTS}
            onClick={() => resultModal()?.hide()}
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-4">
            <div class="flex mb-8 gap-1 items-center">
              {differencesLeft() === 0 && (
                <svg
                  stroke="limegreen"
                  fill="limegreen"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="20px"
                  width="20px"
                  class="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                </svg>
              )}
              {differencesLeft() !== 0 && (
                <svg
                  stroke="red"
                  fill="red"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="30px"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                </svg>
              )}
              <h3 class="mt-[-3px] text-2xl font-medium text-gray-900 dark:text-white">
                {differencesLeft() === 0 ? 'Game completed' : 'Game over'}
              </h3>
            </div>
            <div class="grid">
              <div class="flex justify-between mb-1 text-gray-500 dark:text-gray-400">
                <div class="grid">
                  <span class="text-base font-normal">
                    You made{' '}
                    <span class="font-bold">
                      {numOfMistakes() - mistakesLeft()}
                    </span>{' '}
                    mistakes.
                  </span>
                  <span class="text-base font-normal">
                    You found{' '}
                    <span class="font-bold">
                      {(game()?.differences.length || 0) - differencesLeft()} /{' '}
                      {game()?.differences.length}
                    </span>{' '}
                    differences.
                  </span>
                </div>
                <span class="self-center text-2xl" title="Time elapsed">
                  {formatSeconds(numOfSeconds() - secondsLeft())}
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                <div
                  class="bg-orange-500 h-2.5 rounded-full"
                  style={`width: ${percentage()}`}
                ></div>
              </div>
            </div>
            <div class="flex justify-end items-center mt-6 space-x-2 rtl:space-x-reverse">
              <button
                data-modal-hide={MODALS.RESULTS}
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={onClickNext}
              >
                {differencesLeft() === 0 ? 'Next image' : 'Try again'}
              </button>
              {differencesLeft() !== 0 && (
                <button
                  type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={() =>
                    (window.location.href = `/games/${Number(id) + 1}`)
                  }
                >
                  Next image
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameResult;
