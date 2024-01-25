import { useMediaQuery } from 'solid-use/media-query';

const CTASection = () => {
  const isLgScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="grid grid-cols-1 lg:grid-cols-[auto,auto] relative gap-x-8 py-8 px-4 mx-auto max-w-screen-2xl sm:py-12 lg:px-6">
        <img
          class="absolute bottom-36 lg:bottom-1 right-36 md:right-[21rem] w-[200px] md:w-[300px]"
          src="/cursor.gif"
        />
        <div class="flex flex-col w-full text-left justify-center">
          <h2 class="mb-6 justify-center flex lg:block whitespace-nowrap lg:whitespace-normal text-2xl sm:text-4xl md:text-6xl leading-[1.1] tracking-tight font-bold text-gray-900 dark:text-white">
            <span>Can you spot</span>
            {isLgScreen() && <br />}
            {!isLgScreen() && <span>&nbsp;</span>}
            <span>all 5 differences?</span>
          </h2>
          <p class="text-center lg:text-left mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Take a closer look at the images and compare them.
            <br />
            If you see a difference, click on it.
            {isLgScreen() && <br />}
            {!isLgScreen() && <span>&nbsp;</span>}
            But be careful, because if you make 3 mistakes - you're out!
          </p>
          {isLgScreen() && (
            <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="/games/1"
                class="min-w-[200px] inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Play now
              </a>
              <a
                href="/games"
                class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                Browse images
              </a>
            </div>
          )}
        </div>
        <div class="grid grid-cols-2 gap-4">
          <img src="/images/library-bookshelf-1.webp" />
          <img src="/images/library-bookshelf-2.webp" />
        </div>
        {!isLgScreen() && (
          <div class="grid mt-4 space-y-4 sm:flex-row sm:space-y-0">
            <a
              href="/games/1"
              class="min-w-[200px] inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Play now
            </a>
            <a
              href="/games"
              class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              Browse images
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;
