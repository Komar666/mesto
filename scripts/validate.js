const showInputError = (popupForm, inputTitle, errorMessage, config) => {
    const errorElement = popupForm.querySelector(`.${inputTitle.id}-error`);
    inputTitle.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;

};


const hideInputError = (popupForm, inputTitle, config) => {
    const errorElement = popupForm.querySelector(`.${inputTitle.id}-error`);
    inputTitle.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
};


const isValid = (popupForm, inputTitle, config) => {
    if (!inputTitle.validity.valid) {

        showInputError(popupForm, inputTitle, inputTitle.validationMessage, config);
    } else {

        hideInputError(popupForm, inputTitle, config);
    }
};

const setEventListeners = (popupForm, config) => {

    const inputList = Array.from(popupForm.querySelectorAll(config.inputSelector));
    const formButton = popupForm.querySelector(config.submitButtonSelector);


    inputList.forEach((inputTitle) => {

        inputTitle.addEventListener('input', () => {

            isValid(popupForm, inputTitle, config);
            toggleButtonState(inputList, formButton, config);
        });
    });
};

const enableValidation = (config) => {

    const formList = Array.from(document.querySelectorAll(config.formSelector));
    const inputList = Array.from(popupForm.querySelectorAll(config.inputSelector));


    formList.forEach((popupForm) => {
        popupForm.addEventListener('submit', (evt) => {
            const formButton = popupForm.querySelector(config.submitButtonSelector);
            evt.preventDefault();
            toggleButtonState(inputList, formButton, config);
        });


        setEventListeners(popupForm, config);
    });
};

const hasInvalidInput = (inputList) => {

    return inputList.some((inputElement) => {


        return !inputElement.validity.valid;
    })
};



const toggleButtonState = (inputList, formButton, config) => {

    if (hasInvalidInput(inputList)) {
        formButton.classList.add(config.inactiveButtonClass);
        formButton.setAttribute('disabled', true);

    } else {

        formButton.classList.remove(config.inactiveButtonClass);
        formButton.removeAttribute('disabled');

    }
};