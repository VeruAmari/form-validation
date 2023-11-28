export default function countryValidation() {
  const country = document.getElementById('country');
  const countryError = document.querySelector('.country.error');
  const re = /^.{4,}$/;

  function countryIsValid() {
    const test = re.test(country.value);

    return test;
  }

  function live() {
    country.addEventListener('input', () => {
      if (countryIsValid()) {
        country.classList.remove('invalid');
        country.classList.add('valid');
        countryError.textContent = '';
      } else {
        country.classList.add('invalid');
        country.classList.remove('valid');
        countryError.textContent = 'Country name is too short!';
      }
    });
  }
  return { country, countryError, live, countryIsValid };
}
