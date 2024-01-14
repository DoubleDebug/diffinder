import { Modal } from 'flowbite';
import { createSignal } from 'solid-js';

export const [resultModal, setResultModal] = createSignal<Modal | null>(null);
