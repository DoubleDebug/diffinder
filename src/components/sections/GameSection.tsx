import Game from '../game/Game';
import { createSignal, onMount } from 'solid-js';
import { useParams } from '@solidjs/router';
import { getGame } from '../game/GameLibrary';

export const [circleSize, setCircleSize] = createSignal(30);
export const [circles, setCircles] = createSignal<CircleData[]>([]);
export const [mistakeLeft, setMistakesLeft] = createSignal<number>(3);
export const [differencesLeft, setDifferencesLeft] = createSignal<number>(0);

const GameSection = () => {
  const { id } = useParams();
  const gameData = getGame(Number(id));

  onMount(() => setDifferencesLeft(gameData.differences.length));

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-4 px-4 mx-auto max-w-screen-2xl lg:px-6">
        <div class="mb-4">
          <h2 class="mb-2 text-4xl tracking-tight text-gray-900 dark:text-white">
            Find all differences between these 2 images
          </h2>
          <div class="flex justify-between">
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">
              Once you see a difference, click on it to see if you're correct.
              <br />3 mistakes and you're out!
            </p>
            <div class="grid">
              <p class="text-2xl text-right text-white">
                {differencesLeft()} differences left
              </p>
              <p class="text-2xl text-right text-white">
                {mistakeLeft()} mistakes left
              </p>
            </div>
          </div>
        </div>
        <Game data={gameData} />
      </div>
    </section>
  );
};

export default GameSection;
