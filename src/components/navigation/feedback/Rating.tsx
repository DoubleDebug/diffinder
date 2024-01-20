import { For, createMemo } from 'solid-js';
import { getFormData, setFormData } from '../../../state/feedback';

type StarProps = {
  index: number;
};

const Star = (props: StarProps) => {
  const full = createMemo(() => props.index < getFormData().rating);
  const color = createMemo(() =>
    full() ? 'text-yellow-300' : 'text-gray-300 hover:text-gray-400'
  );
  const onClick = () =>
    setFormData((prev) => ({ ...prev, rating: props.index + 1 }));

  return (
    <svg
      onClick={onClick}
      class={`w-6 h-6 ms-1 cursor-pointer ${color()}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
};

const Rating = () => {
  const stars = Array(5).fill(0);
  return (
    <div class="flex items-center">
      <For each={stars}>{(_, getIndex) => <Star index={getIndex()} />}</For>
    </div>
  );
};

export default Rating;
