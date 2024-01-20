const URL = 'https://api.emailjs.com/api/v1.0/email/send';

const config = {
  service_id: 'service_r7jsqcw',
  template_id: 'template_cs9lf4q',
  user_id: 'X9v_CprX1cSMnU21X',
};

export async function sendEmail(formData: ContactFormData) {
  const body = JSON.stringify({
    ...config,
    template_params: formData,
  });
  const rawResponse = await fetch(URL, {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return rawResponse.status === 200;
}
