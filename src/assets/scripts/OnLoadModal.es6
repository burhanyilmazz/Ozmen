import Modal from '../../molecules/Modal/Modal';
class OnLoadModal {
  static onLoadModal() {
    const hash = $(location).attr("hash");

    switch (hash) {
      case "#errorMessage":
        this.modalType("error");
        break;

      case "#successMessage":
        this.modalType("success");
        break;
    }
  }

  static modalType(type) {
    if ($(`#modal-preset-${type}`).length > 0) {
      $.fancybox.open({
        src: `#modal-preset-${type}`,
        baseClass: `fancybox--${type} m-modal--alert`,
        touch: false
      });
    }
  }
}

export default new OnLoadModal();

$(document).ready(() => OnLoadModal.onLoadModal());
