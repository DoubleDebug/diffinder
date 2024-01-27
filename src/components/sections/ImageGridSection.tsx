import ImagePreview from '../game/ImagePreview';
import { getAllGames } from '../game/GameLibrary';

const ImageGridSection = () => {
  const games = getAllGames().slice(0, 9);
  return (
    <section class="bg-gray-900 pt-8 pb-24">
      <div class="py-4 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div class="flex flex-wrap gap-16 justify-center">
          {games.map((game) => (
            <ImagePreview data={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGridSection;
