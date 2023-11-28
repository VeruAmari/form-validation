export default function mailValidation() {
  const mail = document.getElementById('mail');
  const mailError = document.querySelector('.mail.error');

  return { mail, mailError };
}
