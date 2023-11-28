import mailValid from './mailValid';
import countryValid from './countryValid';
import passValid from './passValid';
import zipValid from './zipValid';

/// Get inputted data from form//
// ##########################################################//
// Form element
const formValidation = function formValidation() {
  const form = document.getElementById('validation');

  // Input fields

  // ##########################################################//

  function clearValues(...attributes) {
    /* Takes in any number of document input elements
    and empties their values */

    [...attributes].forEach((element) => {
      const elem = element;
      elem.value = '';
    });
  }

  function hasErrors() {
    return !(
      mailValid().mail.validity.valid &&
      countryValid().country.validity.valid &&
      zipValid().zipCode.validity.valid &&
      passValid().pass.validity.valid &&
      passValid().passConfirm.validity.valid
    );
  }

  function addListeners() {
    // Prevent submit
    form.addEventListener('submit', (event) => {
      if (hasErrors) {
        event.preventDefault();
        console.log(
          mailValid().mailError,
          countryValid().countryError,
          zipValid().zipError,
          passValid().passError,
          passValid().passConfirmError,
        );
      } else {
        clearValues(
          mailValid().mail,
          countryValid().country,
          zipValid().zipCode,
          passValid().pass,
          passValid().passConfirm,
        );
        form.submit();
      }
    });

    /** Pseudocode
     *
     * Must implement in-line form validationfor each field.
     */

    // Inline validations //
    // Email //
    mailValid().mail.addEventListener('change', () => {
      const re = /./i;
      mailValid().mail.validity.valid = mailValid().mail.value === re;
    });
  }
  return { addListeners };
};

formValidation().addListeners();
