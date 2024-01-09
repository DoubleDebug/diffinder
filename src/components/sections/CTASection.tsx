const CTASection = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="grid grid-cols-2 py-8 px-4 mx-auto max-w-screen-2xl sm:py-12 lg:px-6">
        <div class="flex flex-col text-left justify-center max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Can you spot all 5 differences?
          </h2>
          <p class="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Take a closer look at the images and compare them. If you see a
            difference, click on it. But be careful, because if you make 3
            mistakes - you're out!
            <br />
            And if you're looking for an extra challenge, you can also set a
            time limit
            <br />
            and start racing against the clock!
          </p>
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
        </div>
        <div class="grid grid-cols-2 gap-4">
          <img src="/images/library-bookshelf-1.webp" />
          <img src="/images/library-bookshelf-2.webp" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
