import { createSignal } from 'solid-js';

const LOCAL_STORAGE_FEEDBACK_KEY = 'user-given-feedback';
const defaultData: ContactFormData = {
  name: '',
  message: '',
  rating: 5,
};

export const [getFormData, setFormData] =
  createSignal<ContactFormData>(defaultData);
export const [getSubmitting, setSubmitting] = createSignal<boolean>(false);
const [getResult, setResultVal] = createSignal<boolean | null>(
  localStorage.getItem(LOCAL_STORAGE_FEEDBACK_KEY) === null ? null : true
);
export const [getIsEmpty, setIsEmpty] = createSignal<boolean>(false);

export function resetForm() {
  setSubmitting(false);
  setResultVal(null);
  setIsEmpty(false);
}

export function setResult(res: boolean) {
  if (res) {
    localStorage.setItem(LOCAL_STORAGE_FEEDBACK_KEY, 'true');
  }
  setResultVal(res);
}

export { getResult };
