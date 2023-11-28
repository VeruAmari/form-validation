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
  /*
  function values(...attributes) {
    // Takes in any number of document input elements
    and empties their values 
    function clear() {
      [...attributes].map((element) => {
        const elem = element;
        elem.value = '';
        return elem;
      });
    }
    return { clear };
  }
*/

  function hasErrors() {
    return !(
      mailValid().mailIsValid() &&
      countryValid().countryIsValid() &&
      zipValid().zipIsValid() &&
      passValid().passIsValid() &&
      passValid().passConfirmIsValid()
    );
  }

  function addListeners() {
    // Prevent submit
    form.addEventListener('submit', (event) => {
      if (hasErrors()) {
        event.preventDefault();
      } else {
        const body = document.querySelector('body');
        body.textContent = '';
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        h1.textContent = '🙌';
        h1.setAttribute('style', 'font-size:10rem; ');
        p.textContent = 'We did it!';
        p.setAttribute('style', 'font-size:5rem; ');

        const div = document.createElement('div');
        div.classList.add('congratulations');
        div.appendChild(h1);
        div.appendChild(p);
        body.appendChild(div);
      }
    });

    /** Pseudocode
     *
     * Must implement in-line form validationfor each field.
     */

    // Inline validations //
    // Email //
    mailValid().live();
    zipValid().live();
    countryValid().live();
    passValid().live();
  }
  return { addListeners };
};

formValidation().addListeners();
