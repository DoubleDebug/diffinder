import { createSignal } from 'solid-js';
import { GameController } from './controller';

export const [circleSize, setCircleSize] = createSignal<number>(50);
export const [numOfMistakes, setNumOfMistakes] = createSignal<number>(3);
export const [numOfSeconds, setNumOfSeconds] = createSignal<number>(3 * 60);

export const [game, setGame] = createSignal<DifferenceMetadata | null>(null);
export const [circles, setCircles] = createSignal<CircleData[]>([]);
export const [mistakesLeft, setMistakesLeft] = createSignal<number>(
  numOfMistakes()
);
export const [differencesLeft, setDifferencesLeft] = createSignal<number>(0);
export const [secondsLeft, setSecondsLeft] = createSignal<number>(
  numOfSeconds()
);
export const [userGaveUp, setUserGaveUp] = createSignal<boolean>(false);

export function resetGame() {
  setMistakesLeft(numOfMistakes());
  setSecondsLeft(numOfSeconds());
  setDifferencesLeft(game()!.differences.length);
  setCircles((circles) =>
    circles.map((circle) => ({ ...circle, shown: false }))
  );
  setUserGaveUp(false);

  GameController.startCountdown();
}
