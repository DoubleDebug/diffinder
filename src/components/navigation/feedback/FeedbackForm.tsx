import Rating from './Rating';
import LoadingIcon from '../../icons/LoadingIcon';
import { sendEmail } from '../../../utils/email';
import {
  getFormData,
  setFormData,
  setIsEmpty,
  setSubmitting,
  setResult,
  getSubmitting,
  getIsEmpty,
} from '../../../state/feedback';

const handleSubmit = async (event: MouseEvent) => {
  event.preventDefault();

  // validate
  const data = getFormData();
  if (!data.name || !data.message) {
    setIsEmpty(true);
    return;
  }

  setSubmitting(true);
  const result = await sendEmail(getFormData());
  setSubmitting(false);
  setResult(result);
};

const FeedbackForm = () => {
  return (
    <form class="mb-8">
      <div class="mb-6">
        <label
          for="subject"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your name
        </label>
        <input
          type="text"
          id="subject"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Jason"
          value={getFormData().name}
          onInput={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your thoughts on the game
        </label>
        <textarea
          required
          id="message"
          rows="4"
          class="block min-h-[42px] max-h-[445px] p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="I love this game!"
          value={getFormData().message}
          onInput={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
        />
      </div>
      <label
        for="subject"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Rate the game
      </label>
      <div class="mb-6">
        <Rating />
      </div>
      <button
        type="submit"
        class="text-white flex justify-center bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleSubmit}
        disabled={getSubmitting()}
      >
        {getSubmitting() ? <LoadingIcon /> : 'Send message'}
      </button>
      {getIsEmpty() && (
        <p class="mb-2 text-center text-xs dark:text-red-400">
          Fill out the required fields!
        </p>
      )}
    </form>
  );
};

export default FeedbackForm;
