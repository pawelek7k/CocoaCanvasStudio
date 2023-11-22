(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-buy-top]"),
      closeModalBtn: document.querySelector("[data-modal-close-buy-top]"),
      modal: document.querySelector("[data-modal-buy-top]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();