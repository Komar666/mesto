export default class FormValidator {
    constructor(config, templateSelector) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._templateSelector = templateSelector; // записали селектор в приватное поле
    }

    _showInputError(popupForm, inputTitle, errorMessage) {
        const errorElement = popupForm.querySelector(`.${inputTitle.id}-error`);
        inputTitle.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;

    };


    _hideInputError(popupForm, inputTitle) {
        const errorElement = popupForm.querySelector(`.${inputTitle.id}-error`);
        inputTitle.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
    };

    _isValid(popupForm, inputTitle) {
        if (!inputTitle.validity.valid) {

            this._showInputError(popupForm, inputTitle, inputTitle.validationMessage);
        } else {

            this._hideInputError(popupForm, inputTitle);
        }
    };

    enableValidation() {

        const popupFormThis = document.querySelector(this._templateSelector);
        const inputList = Array.from(popupFormThis.querySelectorAll(this._inputSelector));


        popupFormThis.addEventListener('submit', (evt) => {
            const formButton = popupFormThis.querySelector(this._submitButtonSelector);
            evt.preventDefault();
            this._toggleButtonState(inputList, formButton);
        });

        this._setEventListeners(popupFormThis);
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {


            return !inputElement.validity.valid;
        })
    }


    _toggleButtonState(inputList, formButton) {
        if (this._hasInvalidInput(inputList)) {
            formButton.classList.add(this._inactiveButtonClass);
            formButton.setAttribute('disabled', true);

        } else {

            formButton.classList.remove(this._inactiveButtonClass);
            formButton.removeAttribute('disabled');

        }
    };

    _setEventListeners(popupForm) {
        const inputList = Array.from(popupForm.querySelectorAll(this._inputSelector));
        const formButton = popupForm.querySelector(this._submitButtonSelector);


        inputList.forEach((inputTitle) => {

            inputTitle.addEventListener('input', () => {

                this._isValid(popupForm, inputTitle);
                this._toggleButtonState(inputList, formButton);
            });
        });
    }

}