const CTASection = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="grid grid-cols-1 xl:grid-cols-[auto,auto] relative gap-x-8 py-4 sm:py-8 px-4 mx-auto max-w-screen-2xl xl:px-6">
        <img
          class="absolute bottom-36 xl:bottom-1 right-36 md:right-[21rem] w-[200px] md:w-[300px]"
          src="/cursor.gif"
        />
        <div class="flex flex-col w-full text-left justify-center">
          <h2 class="mb-6 justify-center grid sm:flex text-center sm:text-left xl:block whitespace-nowrap xl:whitespace-normal text-[2.75rem] md:text-6xl leading-[1.1] tracking-tight font-bold text-gray-900 dark:text-white">
            <span>Can you spot</span>
            <br class="hidden sm:block" />
            <span class="hidden sm:block xl:hidden">&nbsp;</span>
            <span>all 4 differences?</span>
          </h2>
          <p class="text-center xl:text-left mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Take a closer look at the images and compare them.
            <br />
            If you see a difference, click on it.
            <br class="hidden xl:block" />
            <span class="xl:hidden">&nbsp;</span>
            But be careful, because if you make 3 mistakes - you're out!
          </p>
          <div class="hidden xl:flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
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
        </div>
        <div class="grid grid-cols-2 gap-4">
          <img src="/images/library-bookshelf-1.webp" />
          <img src="/images/library-bookshelf-2.webp" />
        </div>
        <div class="grid lg:flex lg:justify-end xl:hidden mt-4 gap-3 sm:flex-row">
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
      </div>
    </section>
  );
};

export default CTASection;
