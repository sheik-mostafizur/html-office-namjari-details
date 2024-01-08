/**
 * Modal
 */
(function () {
  function openModal(id) {
    var element = document.getElementById(id);
    if (element !== null) {
      element.dispatchEvent(new CustomEvent("open-me", { detail: {} }));
    }
  }
  function closeModal(id) {
    var element = document.getElementById(id);
    if (element !== null) {
      element.dispatchEvent(new CustomEvent("close-me", { detail: {} }));
    }
  }

  openModal("basicModal");
})();
