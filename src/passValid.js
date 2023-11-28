export default function passValidation() {
  const pass = document.getElementById('pass');
  const passError = document.querySelector('.pass.error');
  const passConfirm = document.getElementById('pass-confirm');
  const passConfirmError = document.querySelector('.pass-confirm.error');

  return { pass, passError, passConfirm, passConfirmError };
}
