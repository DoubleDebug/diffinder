import { onMount } from 'solid-js';
import { differencesLeft, game } from '../../state/game';
import { MODALS } from '../../utils/modals';
import { Modal } from 'flowbite';
import { setResultModal } from '../../state/modals';

const Result = () => {
  onMount(() => {
    const modal = new Modal(document.getElementById(MODALS.RESULTS));
    setResultModal(modal);
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
          <div class="p-4 md:p-5">
            <div class="flex gap-2 mb-2">
              <img src="/favicon.svg" class="h-8" alt="Flowbite Logo" />
              <h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                {differencesLeft() === 0 ? 'Challenge completed!' : 'Results'}
              </h3>
            </div>
            <div class="grid">
              <p class="text-gray-500 dark:text-gray-400 mb-6">
                You found{' '}
                {(game()?.differences.length || 0) - differencesLeft()} /{' '}
                {game()?.differences.length} differences.
              </p>
              <div class="flex justify-between mb-1 text-gray-500 dark:text-gray-400">
                <span class="text-base font-normal">My storage</span>
                <span class="text-sm font-semibold text-gray-900 dark:text-white">
                  376,3 of 500 GB used
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                <div
                  class="bg-orange-500 h-2.5 rounded-full"
                  style="width: 85%"
                ></div>
              </div>
            </div>
            <div class="flex items-center mt-6 space-x-2 rtl:space-x-reverse">
              <button
                data-modal-hide={MODALS.RESULTS}
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Try again
              </button>
              <button
                data-modal-hide={MODALS.RESULTS}
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
