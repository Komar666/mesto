import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImgObjectItem = this._popup.querySelector('.popup-img-object__item');
        this._popupImgObjectText = this._popup.querySelector('.popup-img-object__text');

    }

    open(name, link) {
        super.open();
        this._popupImgObjectItem.src = link;
        this._popupImgObjectItem.alt = name;
        this._popupImgObjectText.textContent = name;
    }

}