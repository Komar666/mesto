import { openPopup, popupImg, popupImgObjectItem } from './index.js';

export default class Card {

    constructor(text, image, popupImg) {
        this._text = text;
        this._image = image;
    }

    _getTemplate() {

        const cardElement = document
            .querySelector('#element')
            .content
            .querySelector('.element')
            .cloneNode(true);


        return cardElement;

    }

    generateCard() {

        this._element = this._getTemplate();
        this._setEventListeners();


        const elementImages = this._element.querySelector('.element__images');
        elementImages.src = this._image;
        elementImages.alt = this._text;
        this._element.querySelector('.element-group__text').textContent = this._text;


        return this._element;
    }


    _setEventListeners() {
        this._element.querySelector('.element-group__icon').addEventListener('click', () => {
            this._changeLikeClick();
        });

        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._deleteCardClick();
        });

        this._element.querySelector('.element__images').addEventListener('click', () => {
            this._openChangeClick();
        });

    }

    _changeLikeClick() {
        this._element.querySelector('.element-group__icon').classList.toggle('element-group__icon-active');
    }

    _deleteCardClick() {
        this._element.querySelector('.element__delete').closest('.element');
        this._element.remove();
    }

    _openChangeClick() {
        openPopup(popupImg);
        popupImgObjectItem.src = this._image;

        popupImgObjectItem.alt = this._text;

        document.querySelector('.popup-img-object__text').textContent = this._text;
    }

}