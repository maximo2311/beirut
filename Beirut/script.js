const caja = document.getElementsByClassName('caja');

caja.addEventListener('click', () => {
  caja.classList.toggle('caja:active .texp');
  caja.classList.toggle('caja:active .texto');
  caja.classList.toggle('caja:active .img-content');
  caja.classList.toggle('caja:active');
});