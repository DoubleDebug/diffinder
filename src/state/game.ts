import { createSignal } from 'solid-js';

export const [game, setGame] = createSignal<DifferenceMetadata | null>(null);
export const [circleSize, setCircleSize] = createSignal(30);
export const [circles, setCircles] = createSignal<CircleData[]>([]);
export const [mistakesLeft, setMistakesLeft] = createSignal<number>(3);
export const [differencesLeft, setDifferencesLeft] = createSignal<number>(0);
