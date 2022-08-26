import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards } from './cards.js';

const popupProfileEdit = document.querySelector('.popup-profile-edit');
const profileTitle = document.querySelector('.profile-info__title');
const profileSub = document.querySelector('.profile-info__subtitle');
const buttonEdit = document.querySelector('.profile-info__button');
const formProfileEdit = document.querySelector('.form-profile-edit ');
const inputTitle = document.querySelector('.popup-form__field');
const inputSub = document.querySelector('.popup-form__field_type_sub');
// const popupForm = document.querySelector('.popup-form');
// const formButton = document.querySelector('.popup-form__button');


const popupAddPlace = document.querySelector('.popup-add');
const formPlaceAdd = document.querySelector('.form-place-add');

// const buttonCloseImg = document.querySelector('.popup-img-block__close_type_img')
const buttonAddplace = document.querySelector('.profile__button');
const inputPlace = document.querySelector('.popup-form__field_type_name');
const inputLink = document.querySelector('.popup-form__field_type_link');

export const popupImg = document.querySelector('.popup-img');
export const popupImgObjectItem = document.querySelector('.popup-img-object__item');

const elementsList = document.querySelector('.elements__list');

const config = {
    formSelector: '.popup-form',
    inputSelector: '.popup-form__field',
    submitButtonSelector: '.popup-form__button',
    inactiveButtonClass: 'popup-form__button_inactive',
    inputErrorClass: 'popup-form__field_type_error',
}

const validationEditProgile = new FormValidator(config, '.form-profile-edit');
validationEditProgile.enableValidation();
const validationAddPlace = new FormValidator(config, '.form-place-add');
validationAddPlace.enableValidation();


function handleProfileFormSubmit(evt) {

    profileTitle.textContent = inputTitle.value;
    profileSub.textContent = inputSub.value;
    closePopup(popupProfileEdit);
}

function openProfileEdit() {
    openPopup(popupProfileEdit);
    inputTitle.value = profileTitle.textContent;
    inputSub.value = profileSub.textContent;
}

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.classList.add('animation');
    document.addEventListener('keydown', closeOnEscapeKey);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeOnEscapeKey);
}

const closeOnEscapeKey = (evt) => {
    if (evt.key === 'Escape') {
        const openSelectorPopup = document.querySelector('.popup_opened');
        closePopup(openSelectorPopup);
    }
}

buttonEdit.addEventListener('click', openProfileEdit);

buttonAddplace.addEventListener('click', function() {
    openPopup(popupAddPlace);
});

formProfileEdit.addEventListener('submit', handleProfileFormSubmit);

const popupList = Array.from(document.querySelectorAll('.popup'));
popupList.forEach((popup) => {
    popup.addEventListener('click', (evt) => {

        if (evt.target.classList.contains('popup-img-block__close') || evt.target.classList.contains('popup') || evt.target.classList.contains('popup-container__close')) {
            closePopup(popup);
        }
    });


});

initialCards.forEach((item) => {
    const card = new Card(item.name, item.link);
    const cardElement = card.generateCard();
    elementsList.prepend(cardElement);
});

function addPlace(evt) {
    const cardnew = new Card(inputPlace.value, inputLink.value);
    const cardElement = cardnew.generateCard();
    elementsList.prepend(cardElement);
    formPlaceAdd.reset();
    closePopup(popupAddPlace);
}

formPlaceAdd.addEventListener('submit', addPlace);