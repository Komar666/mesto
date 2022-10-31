import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(name, link, popupImgObjectItem, popupImgObjectText) {
        super.open();
        popupImgObjectItem.src = link;
        popupImgObjectItem.alt = name;
        popupImgObjectText.textContent = name;
    }

}