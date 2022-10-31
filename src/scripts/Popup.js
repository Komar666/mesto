export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        this._popupSelector.classList.add('animation');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popupSelector.addEventListener('click', (evt) => {

            if (evt.target.classList.contains('popup-img-block__close') || evt.target.classList.contains('popup') || evt.target.classList.contains('popup-container__close')) {
                this.close();

            }
        });
    }
}