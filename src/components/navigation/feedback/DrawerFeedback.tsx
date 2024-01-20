import { getResult } from '../../../state/feedback';
import FeedbackForm from './FeedbackForm';
import { Failure, Success } from './FeedbackResults';

const DrawerFeedback = () => {
  return (
    <div
      id="drawer-feedback"
      class="flex flex-col fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
      tabindex="-1"
      data-drawer-placement="right"
      aria-labelledby="drawer-contact-label"
    >
      <h5
        id="drawer-label"
        class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        <svg
          class="w-4 h-4 me-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 16"
        >
          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
        </svg>
        Leave feedback
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-feedback"
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
      {getResult() === null && <FeedbackForm />}
      {getResult() === true && <Success />}
      {getResult() === false && <Failure />}
      <p class="mt-auto mb-2 text-center text-sm dark:text-gray-400">
        Contact me on social media if you have additional comments!
      </p>
      <div class="flex justify-center gap-2">
        <p class="mb-2 text-xs dark:text-blue-400">
          <a href="https://www.linkedin.com/in/double-debug/">LinkedIn</a>
        </p>
        <p class="mb-2 text-xs dark:text-blue-400">
          <a href="https://twitter.com/YoutubeDoubleD">Twitter</a>
        </p>
      </div>
    </div>
  );
};

export default DrawerFeedback;
