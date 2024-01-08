const Footer = () => {
  return (
    <footer class="bg-white shadow dark:bg-gray-900">
      <div class="w-full mx-auto p-4 md:py-8">
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Created by{" "}
          <a
            href="https://github.com/DoubleDebug"
            class="text-blue-500 cursor-pointer"
          >
            DoubleDebug
          </a>
          , Jan 2024
        </span>
      </div>
    </footer>
  );
};

export default Footer;
