import SearchForm from '../forms/SearchForm';
import ImagePreview from '../game/ImagePreview';
import { filteredGames } from '../../state/grid';

const ImageGridSection = () => {
  return (
    <section class="bg-gray-900 pt-8 pb-24">
      <div class="flex justify-center w-full mb-4">
        <SearchForm />
      </div>
      <div class="py-4 px-4 mx-auto max-w-screen-2xl lg:px-6">
        <div class="flex flex-wrap gap-16 justify-center">
          {filteredGames().map((game) => (
            <ImagePreview data={game} />
          ))}
        </div>
        {filteredGames().length === 0 && (
          <div class="flex justify-center min-h-[300px] items-center">
            <div class="flex flex-col items-center gap-4 h-min">
              <svg
                class="w-6 h-6 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <p class="mb-3 text-gray-500 dark:text-gray-400">
                No results found.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGridSection;
