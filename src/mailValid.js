export default function mailValidation() {
  const mail = document.getElementById('mail');
  const mailError = document.querySelector('.mail.error');
  const re = /.+@{1}.+\.{1}.+/i;

  function mailIsValid() {
    return re.test(mail.value);
  }
  function live() {
    mail.setAttribute('pattern', re);

    mail.addEventListener('input', () => {
      if (re.test(mail.value)) {
        mailError.textContent = '';
        mail.classList.add('valid');
        mail.classList.remove('invalid');
      } else {
        mailError.textContent = 'Please input an email.';
        mail.classList.add('invalid');
        mail.classList.remove('valid');
      }
    });
  }

  return { mail, mailError, live, mailIsValid };
}
