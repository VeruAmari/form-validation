export default function countryValidation() {
  const country = document.getElementById('country');
  const countryError = document.querySelector('.country.error');

  return { country, countryError };
}
