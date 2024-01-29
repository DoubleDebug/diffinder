import { getFilter, setFilter } from '../../state/grid';

const difficultyLabels = {
  all: 'All difficulties',
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};

const SearchForm = () => {
  return (
    <form class="w-full max-w-[90%] lg:max-w-[700px]">
      <div class="flex justify-between gap-3">
        <div class="relative w-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
          </div>
          <input
            type="search"
            class="block p-2.5 pl-10 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Browse images"
            required
            value={getFilter().searchQuery}
            onInput={(e) =>
              setFilter((prev) => ({ ...prev, searchQuery: e.target.value }))
            }
          />
        </div>
        <select
          value={getFilter().difficulty}
          onChange={(e) =>
            setFilter((prev) => ({
              ...prev,
              difficulty: e.target.value as any,
            }))
          }
          class="bg-gray-50 border w-[150px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {(
            Object.keys(difficultyLabels) as (keyof typeof difficultyLabels)[]
          ).map((diff) => (
            <option value={diff} selected={getFilter().difficulty === diff}>
              {difficultyLabels[diff]}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SearchForm;
