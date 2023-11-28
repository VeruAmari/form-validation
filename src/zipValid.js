export default function zipValidation() {
  const zipCode = document.getElementById('zipcode');
  const zipError = document.querySelector('.zip.error');

  return { zipCode, zipError };
}
