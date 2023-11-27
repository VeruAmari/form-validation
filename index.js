/// Get inputted data from form//
//##########################################################//
// Form element
const form = document.getElementById('validation');

// Input fields
const mail = document.getElementById('mail');
const country = document.getElementById('country');
const zipCode = document.getElementById('zipcode');
const pass = document.getElementById('pass');
const passConfirm = document.getElementById('pass-confirm');
//##########################################################//

function clearValues (...attributes) {
  /* Takes in any number of document input elements
  and empties their values */

  [...attributes].forEach(element=>{
    element.value = '';
  })
};

form.addEventListener('submit', (event)=>{
  console.log('Debugging:', '\nMail: ', mail.value, '\nCountry: ', country.value,'\nZip: ', zipCode.value,'\nPass: ', pass.value, '\nPass Confirm: ', passConfirm.value);
  event.preventDefault();

  // clearValues(mail, country, zipCode, pass, passConfirm);
})

/** Pseudocode
 * 
 * Must implement in-line form validationfor each field.
 */