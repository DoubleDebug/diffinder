import { createSignal } from 'solid-js';

export const [game, setGame] = createSignal<DifferenceMetadata | null>(null);
export const [numOfMistakes, setNumOfMistakes] = createSignal<number>(3);
export const [circleSize, setCircleSize] = createSignal(30);
export const [circles, setCircles] = createSignal<CircleData[]>([]);
export const [mistakesLeft, setMistakesLeft] = createSignal<number>(
  numOfMistakes()
);
export const [differencesLeft, setDifferencesLeft] = createSignal<number>(0);

export function resetGame() {
  setMistakesLeft(numOfMistakes());
  setDifferencesLeft(game()!.differences.length);
  setCircles((circles) =>
    circles.map((circle) => ({ ...circle, shown: false }))
  );
}
