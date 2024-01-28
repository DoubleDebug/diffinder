const Footer = () => {
  return (
    <footer class="bg-white shadow dark:bg-gray-900">
      <div class="grid w-full mx-auto">
        <hr class="border-gray-200 w-full dark:border-gray-700" />
        <span class="block my-4 text-sm text-gray-500 text-center dark:text-gray-400">
          Created by{' '}
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
