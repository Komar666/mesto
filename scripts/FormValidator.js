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

        this._popupFormThis = document.querySelector(this._templateSelector);
        this._inputList = Array.from(this._popupFormThis.querySelectorAll(this._inputSelector));
        this._formButton = this._popupFormThis.querySelector(this._submitButtonSelector);

        this._popupFormThis.addEventListener('submit', (evt) => {

            evt.preventDefault();
            this._toggleButtonState(this._inputList, this._formButton);

        });

        this._setEventListeners(this._popupFormThis);
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {


            return !inputElement.validity.valid;
        })
    }


    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._formButton.classList.add(this._inactiveButtonClass);
            this._formButton.setAttribute('disabled', true);
        } else {

            this._formButton.classList.remove(this._inactiveButtonClass);
            this._formButton.removeAttribute('disabled');

        }
    };

    _setEventListeners(popupForm) {


        this._inputList.forEach((inputTitle) => {

            inputTitle.addEventListener('input', () => {

                this._isValid(popupForm, inputTitle);
                this._toggleButtonState();
            });
        });
    }

    resetValidation() {

        this._toggleButtonState();
        this._hideInputError(this._inputList, this._formButton)

    }

}