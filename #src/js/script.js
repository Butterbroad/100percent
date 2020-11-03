const modalTrigger = document.querySelector('.info-hero__terms');

modalTrigger.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.classList.add('active');

  const modalClose = document.querySelector('.modal-info__close');
  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });

});



//register links
const registerLinks = document.querySelectorAll('.get-link');

if (registerLinks.length > 0) {
  registerLinks.forEach(item => {
    item.setAttribute('href', item.getAttribute('href') + window.location.search);
  });
}



















@@include('webpSupport.js')