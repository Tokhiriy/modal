"use strict";
window.addEventListener("DOMContentLoaded", () => {
  // changing in git hub
  const modal = document.querySelector(".modal"),
    modalContent = document.querySelector(".modal-content"),
    btn = document.querySelector(".btn"),
    closeBtn = document.querySelector(".close-btn");
  const modalTimer = setTimeout(openModal, 3000);

  // open Modal

  btn.addEventListener("click", openModal);

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.scroll = "hidden";
    clearInterval(modalTimer);
  }

  // close Modal

  closeBtn.addEventListener("click", closeModal);

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.scroll = " ";
  }

  // close modal outside of the modal content

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
