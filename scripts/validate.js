const showInputError = (popupForm, inputTitle, errorMessage, obj) => {
    const errorElement = popupForm.querySelector(`.${inputTitle.id}-error`);
    inputTitle.classList.add(obj.inputErrorClass);
    errorElement.textContent = errorMessage;

};


const hideInputError = (popupForm, inputTitle, obj) => {
    const errorElement = popupForm.querySelector(`.${inputTitle.id}-error`);
    inputTitle.classList.remove(obj.inputErrorClass);
    errorElement.textContent = '';
};


const isValid = (popupForm, inputTitle, obj) => {
    if (!inputTitle.validity.valid) {

        showInputError(popupForm, inputTitle, inputTitle.validationMessage, obj);
    } else {

        hideInputError(popupForm, inputTitle, obj);
    }
};

const setEventListeners = (popupForm, obj) => {

    const inputList = Array.from(popupForm.querySelectorAll(obj.inputSelector));
    const formButton = popupForm.querySelector(obj.submitButtonSelector);


    inputList.forEach((inputTitle) => {

        inputTitle.addEventListener('input', () => {

            isValid(popupForm, inputTitle, obj);
            toggleButtonState(inputList, formButton, obj);
        });
    });
};

const enableValidation = (obj) => {




    const formList = Array.from(document.querySelectorAll(obj.formSelector));


    formList.forEach((popupForm) => {
        popupForm.addEventListener('submit', (evt) => {

            evt.preventDefault();
        });


        setEventListeners(popupForm, obj);
    });
};

const hasInvalidInput = (inputList) => {

    return inputList.some((inputElement) => {


        return !inputElement.validity.valid;
    })
};



const toggleButtonState = (inputList, formButton, obj) => {

    if (hasInvalidInput(inputList)) {

        formButton.classList.add(obj.inactiveButtonClass);
        formButton.setAttribute('disabled', true);
    } else {

        formButton.classList.remove(obj.inactiveButtonClass);
        formButton.removeAttribute('disabled');
    }
};