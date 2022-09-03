export default class Card {

    constructor(text, image, handleCardClick, templateSelector) {
        this._text = text;
        this._image = image;
        this._handleCardClick = handleCardClick;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {

        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);


        return cardElement;

    }

    generateCard() {

        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__images');
        this._likeButton = this._element.querySelector('.element-group__icon');
        this._deleteButton = this._element.querySelector('.element__delete');
        this._cardImage.src = this._image;
        this._cardImage.alt = this._text;
        this._element.querySelector('.element-group__text').textContent = this._text;
        this._setEventListeners();

        return this._element;
    }


    _setEventListeners() {
        this._element.querySelector('.element-group__icon').addEventListener('click', () => {
            this._changeLikeClick();
        });

        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._deleteCardClick();
        });

        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._text, this._image)
        });

    }

    _changeLikeClick() {
        this._likeButton.classList.toggle('element-group__icon-active');
    }

    _deleteCardClick() {
        this._deleteButton.closest('.element');
        this._element.remove();
    }

}