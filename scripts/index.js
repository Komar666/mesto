const popup = document.querySelector('.popup');
const profileTitle = document.querySelector('.profile-info__title');
const profileSub = document.querySelector('.profile-info__subtitle');
const editButton = document.querySelector('.profile-info__button');
const formElement = popup.querySelector('.popup-form');
const formButton = formElement.querySelector('.popup-form__button')
const inputTitle = formElement.querySelector('.popup-form__field');
const inputSub = formElement.querySelector('.popup-form__field_type_sub');
const closeButton = popup.querySelector('.popup-container__close');


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = inputTitle.value;
    profileSub.textContent = inputSub.value;
    popupClose();
}

function popupOpen() {
    popup.classList.add('popup_opened');
    inputTitle.value = profileTitle.textContent;
    inputSub.value = profileSub.textContent;
}

function popupClose() {
    popup.classList.remove('popup_opened');
}


editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);