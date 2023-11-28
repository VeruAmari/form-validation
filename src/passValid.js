export default function passValidation() {
  const pass = document.getElementById('pass');
  const passError = document.querySelector('.pass.error');
  const passConfirm = document.getElementById('pass-confirm');
  const passConfirmError = document.querySelector('.pass-confirm.error');
  const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  function passIsValid() {
    return re.test(pass.value);
  }
  function passConfirmIsValid() {
    return pass.value === passConfirm.value;
  }

  function live() {
    pass.addEventListener('input', () => {
      if (!re.test(pass.value)) {
        pass.classList.remove('valid');
        pass.classList.add('invalid');

        if (pass.value.length < 8) {
          passError.textContent =
            'Password must be at least 8 characters long.';
        } else if (!/[A-Z]+/.test(pass.value)) {
          passError.textContent =
            'Password must contain at least one upper case letter.';
        } else if (!/[a-z]+/.test(pass.value)) {
          passError.textContent =
            'Password must contain at least one lower case letter.';
        } else if (!/[0-9]+/.test(pass.value)) {
          passError.textContent = 'Password must contain at least one number.';
        } else if (!/(?=.*?[#?!@$%^&*-])/.test(pass.value)) {
          passError.textContent = 'Password must contain at least one symbol';
        }
      } else {
        pass.classList.add('valid');
        pass.classList.remove('invalid');
        passError.textContent = '';
      }
    });

    passConfirm.addEventListener('input', () => {
      if (!(pass.value === passConfirm.value)) {
        passConfirmError.textContent = "Passwords don't match.";
        passConfirm.classList.add('invalid');
        passConfirm.classList.remove('valid');
      } else {
        passConfirmError.textContent = '';
        passConfirm.classList.add('valid');
        passConfirm.classList.remove('invalid');
      }
    });
  }

  return {
    pass,
    passError,
    passConfirm,
    passConfirmError,
    live,
    passIsValid,
    passConfirmIsValid,
  };
}
