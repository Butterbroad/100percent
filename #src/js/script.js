const modalTrigger = document.querySelector('.info-hero__terms');

modalTrigger.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.classList.add('active');

  const modalClose = document.querySelector('.modal-info__close');
  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  const modalLink = document.querySelector('.modal-info__list-link');
  modalLink.addEventListener('click', e => {
    e.preventDefault();
    modal.classList.remove('active');
  })
});



















@@include('webpSupport.js')