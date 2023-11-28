/// Get inputted data from form//
// ##########################################################//
// Form element
const formValidation = function () {
  const form = document.getElementById('validation');

  // Input fields
  const mail = document.getElementById('mail');
  const mailError = document.querySelector('.mail.error');
  const country = document.getElementById('country');
  const countryError = document.querySelector('.country.error');
  const zipCode = document.getElementById('zipcode');
  const zipError = document.querySelector('.zip.error');
  const pass = document.getElementById('pass');
  const passError = document.querySelector('.pass.error');
  const passConfirm = document.getElementById('pass-confirm');
  const passConfirmError = document.querySelector('.pass-confirm.error');
  // ##########################################################//

  /* function clearValues(...attributes) {
    /* Takes in any number of document input elements
    and empties their values 

    [...attributes].forEach((element) => {
      // element.value = '';
    });
  }
  */

  function hasErrors() {
    return !(
      mail.validity.valid &&
      country.validity.valid &&
      zipCode.validity.valid &&
      pass.validity.valid &&
      passConfirm.validity.valid
    );
  }

  function addListeners() {
    // Prevent submit
    form.addEventListener('submit', (event) => {
      console.log(
        'Debugging:',
        '\nMail: ',
        mail.value,
        '\nCountry: ',
        country.value,
        '\nZip: ',
        zipCode.value,
        '\nPass: ',
        pass.value,
        '\nPass Confirm: ',
        passConfirm.value,
      );

      if (hasErrors) {
        event.preventDefault();
        console.log(
          mailError,
          countryError,
          zipError,
          passError,
          passConfirmError,
        );
      } else {
        // clearValues(mail, country, zipCode, pass, passConfirm);
        form.submit();
      }
    });

    /** Pseudocode
     *
     * Must implement in-line form validationfor each field.
     */

    // Inline validations //
    // Email //
    mail.addEventListener('change', () => {
      const re = /./i;
      mail.validity.valid = mail.value === re;
    });
  }
  return { addListeners };
};

formValidation().addListeners();
