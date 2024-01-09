import { useParams } from '@solidjs/router';
import Game from '../game/Game';
import { getGame } from '../game/GameLibrary';

const GameSection = () => {
  const { id } = useParams();
  const gameData = getGame(Number(id));
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-4 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div class="text-center mb-8">
          <h2 class="mb-4 text-4xl tracking-tight text-gray-900 dark:text-white">
            Find all differences between these 2 images
          </h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">
            Once you see a difference, click on it to see if you're correct.
            <br />3 mistakes and you're out!
          </p>
        </div>
        <Game data={gameData} />
      </div>
    </section>
  );
};

export default GameSection;
