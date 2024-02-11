const DrawerHowToPlay = () => {
  return (
    <div
      id="drawer-howto"
      class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
      tabindex="-1"
      aria-labelledby="drawer-howto-label"
    >
      <h5
        id="drawer-right-label"
        class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        <svg
          class="w-4 h-4 me-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        How to play
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-howto"
        aria-controls="drawer-howto"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
        Take a close look at the 2 images in front of you. When you spot a
        difference, click on it.
      </p>
      <ul class="mb-6 text-sm list-disc text-gray-500 dark:text-gray-400">
        <li class="ml-8">
          If you clicked correctly,
          <br />
          you get a <span class="text-green-500">green light</span> which means
          you found a difference.
        </li>

        <br />
        <li class="ml-8">
          If you clicked incorrectly,
          <br /> you get a <span class="text-red-500">red light</span> which
          means you made a mistake.
        </li>
      </ul>
      <p class="my-3 text-sm text-gray-500 dark:text-gray-400">
        If you make 3 mistakes, you're out!
      </p>
      <img src="how-to-play.gif" />
    </div>
  );
};

export default DrawerHowToPlay;
