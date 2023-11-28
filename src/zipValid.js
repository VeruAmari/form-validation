export default function zipValidation() {
  const zipCode = document.getElementById('zipcode');
  const zipError = document.querySelector('.zip.error');
  const re = /^.{4,}$/;

  function zipIsValid() {
    const test = re.test(zipCode.value);

    return test;
  }

  function live() {
    zipCode.addEventListener('input', () => {
      console.log(zipIsValid());

      if (zipIsValid()) {
        zipCode.classList.remove('invalid');
        zipCode.classList.add('valid');
        zipError.textContent = '';
      } else {
        zipCode.classList.add('invalid');
        zipCode.classList.remove('valid');
        zipError.textContent = 'Zip code is too short!';
      }
    });
  }
  return { zipCode, zipError, live, zipIsValid };
}
