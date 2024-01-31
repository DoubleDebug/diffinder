import { Dropdown, Modal } from 'flowbite';
import { createSignal } from 'solid-js';

export const [resultModal, setResultModal] = createSignal<Modal | null>(null);
export const [optionsDropdown, setOptionsDropdown] =
  createSignal<Dropdown | null>(null);
