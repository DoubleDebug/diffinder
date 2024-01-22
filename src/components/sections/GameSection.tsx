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
} from '../../state/game';

const GameSection = () => {
  const { id } = useParams();
  const gameData = getGame(Number(id));

  onMount(() => {
    setGame(gameData);
    setDifferencesLeft(gameData.differences.length);
  });

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-4 px-4 mx-auto max-w-screen-2xl lg:px-6">
        <div class="flex justify-between mb-4">
          <div class="grid">
            <h2 class="mb-2 text-4xl tracking-tight text-gray-900 dark:text-white">
              Find all differences between these 2 images
            </h2>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">
              Once you see a difference, click on it to see if you're correct. 3
              mistakes and you're out!
            </p>
          </div>
          <div class="grid gap-2">
            <p class="text-4xl text-white text-right">
              {formatSeconds(secondsLeft())}
            </p>
            <div class="flex gap-2 h-min self-end">
              <span class="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                {differencesLeft()} differences
              </span>
              <span class="bg-red-100 text-red-800 text-sm font-medium px-4 py-1 rounded dark:bg-red-900 dark:text-red-300">
                {mistakesLeft()} mistakes
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
