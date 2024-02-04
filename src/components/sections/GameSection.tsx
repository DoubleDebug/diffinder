import Game from '../game/Game';
import { onMount } from 'solid-js';
import { useParams } from '@solidjs/router';
import { getGame } from '../game/GameLibrary';
import { formatSeconds } from '../../utils/time';
import {
  setDifferencesLeft,
  differencesLeft,
  mistakesLeft,
  setGame,
  secondsLeft,
  numOfMistakes,
  setUserGaveUp,
} from '../../state/game';
import { Dropdown } from 'flowbite';
import { optionsDropdown, setOptionsDropdown } from '../../state/popup';

const GameSection = () => {
  const { id } = useParams();
  const gameData = getGame(Number(id));

  onMount(() => {
    setGame(gameData);
    setDifferencesLeft(gameData.differences.length);
    setOptionsDropdown(
      new Dropdown(
        document.getElementById('dropdownDots'),
        document.getElementById('dropdownMenuIconButton'),
        {
          placement: 'bottom-end',
          offsetDistance: 8,
        }
      )
    );
  });

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-4 px-4 mx-auto max-w-screen-2xl lg:px-6">
        <div class="flex justify-between mb-4">
          <div class="grid items-end">
            <h2 class="hidden sm:block mb-2 text-3xl md:text-4xl tracking-tight text-gray-900 dark:text-white">
              {gameData.name}
            </h2>
            <p class="hidden md:block text-gray-500 sm:text-xl dark:text-gray-400">
              Find all differences between these 2 images
            </p>
          </div>
          <div class="grid gap-2">
            <div class="flex gap-4  justify-end">
              <p class="text-4xl text-white text-right">
                {formatSeconds(secondsLeft())}
              </p>
              <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                data-dropdown-placement="bottom-end"
                data-dropdown-offset-distance="8"
                class="inline-flex h-[40px] items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 4 15"
                >
                  <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </button>
            </div>
            <div
              id="dropdownDots"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconButton"
              >
                <li>
                  <a
                    href="#"
                    onClick={() =>
                      (window.location.href = `/games/${Number(id) + 1}`)
                    }
                    class="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Skip image
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => {
                      optionsDropdown()?.hide();
                      setUserGaveUp(true);
                    }}
                    class="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Give up
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex gap-2 h-min self-end">
              <span class="whitespace-nowrap bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                {gameData.differences.length - differencesLeft()} /{' '}
                {gameData.differences.length} differences
              </span>
              <span class="whitespace-nowrap bg-red-100 text-red-800 text-sm font-medium px-4 py-1 rounded dark:bg-red-900 dark:text-red-300">
                {numOfMistakes() - mistakesLeft()} / {numOfMistakes()} mistakes
              </span>
            </div>
          </div>
        </div>
        <Game data={gameData} />
      </div>
    </section>
  );
};

export default GameSection;
