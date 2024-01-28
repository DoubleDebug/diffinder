const Navbar = () => {
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/favicon.svg" class="h-8" alt="Flowbite Logo" />
          <h1 class="mb-2 text-2xl tracking-tight font-bold text-gray-900 dark:text-white">
            Diffinder
          </h1>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="hidden md:flex font-medium flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="22px"
                width="22px"
                xmlns="http://www.w3.org/2000/svg"
                data-drawer-target="drawer-howto"
                data-tooltip-target="tooltip-howto"
                data-drawer-placement="right"
                data-drawer-show="drawer-howto"
                data-drawer-body-scrolling="true"
                class="text-white hover:text-blue-500 cursor-pointer focus:outline-none"
              >
                <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path>
              </svg>
              <div
                id="tooltip-howto"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-600 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                How to play
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>
            <li>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                data-tooltip-target="tooltip-feedback"
                data-drawer-target="drawer-feedback"
                data-drawer-show="drawer-feedback"
                data-drawer-placement="right"
                data-drawer-body-scrolling="true"
                class="text-white hover:text-blue-500 cursor-pointer focus:outline-none"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"></path>
              </svg>
              <div
                id="tooltip-feedback"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-600 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Leave feedback
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>
          </ul>
          <ul class="md:hidden flex font-medium flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white dark:hover:bg-gray-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
                data-drawer-target="drawer-howto"
                data-drawer-placement="right"
                data-drawer-show="drawer-howto"
                data-drawer-body-scrolling="true"
              >
                How to play
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                data-drawer-target="drawer-feedback"
                data-drawer-show="drawer-feedback"
                data-drawer-placement="right"
                data-drawer-body-scrolling="true"
              >
                Leave feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
