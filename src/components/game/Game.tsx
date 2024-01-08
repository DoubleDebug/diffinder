import { game1 } from "./GameLibrary";
import ImageDifference from "./ImageDifference";

const Game = () => {
  return (
    <div class="dark:bg-gray-900 flex justify-center items-center">
      <div class="max-w-[2000px]">
        <ImageDifference {...game1} />
      </div>
    </div>
  );
};

export default Game;
