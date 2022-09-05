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
const popupImgObjectText = document.querySelector('.popup-img-object__text');
// const popupForm = document.querySelector('.popup-form');
// const formButton = document.querySelector('.popup-form__button');


const popupAddPlace = document.querySelector('.popup-add');
const formPlaceAdd = document.querySelector('.form-place-add');

// const buttonCloseImg = document.querySelector('.popup-img-block__close_type_img')
const buttonAddplace = document.querySelector('.profile__button');
const inputPlace = document.querySelector('.popup-form__field_type_name');
const inputLink = document.querySelector('.popup-form__field_type_link');

const popupImg = document.querySelector('.popup-img');
const popupImgObjectItem = document.querySelector('.popup-img-object__item');

const elementsList = document.querySelector('.elements__list');

const config = {
    formSelector: '.popup-form',
    inputSelector: '.popup-form__field',
    submitButtonSelector: '.popup-form__button',
    inactiveButtonClass: 'popup-form__button_inactive',
    inputErrorClass: 'popup-form__field_type_error',
}

const validationEditProfile = new FormValidator(config, '.form-profile-edit');
validationEditProfile.enableValidation();
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
    validationEditProfile.resetValidation();
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.classList.add('animation');
    document.addEventListener('keydown', closeOnEscapeKey);
}


const closeOnEscapeKey = (evt) => {
    if (evt.key === 'Escape') {
        const openSelectorPopup = document.querySelector('.popup_opened');
        closePopup(openSelectorPopup);
    }
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeOnEscapeKey);
}

buttonEdit.addEventListener('click', openProfileEdit);

buttonAddplace.addEventListener('click', function() {
    openPopup(popupAddPlace);
    validationAddPlace.resetValidation();
    formPlaceAdd.reset();
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
    elementsList.prepend(createCard(item.name, item.link));
});


console.log(initialCards);

function createCard(name, link) {
    const card = new Card(name, link, handleCardClick, '#element');
    const cardElement = card.generateCard();
    return cardElement;

}



function addPlace() {

    elementsList.prepend(createCard(inputPlace.value, inputLink.value));
    closePopup(popupAddPlace);
    formPlaceAdd.reset();
}

function handleCardClick(name, link) {
    popupImgObjectItem.src = link;
    popupImgObjectItem.alt = name;
    openPopup(popupImg);
    popupImgObjectText.textContent = name;
    console.log(popupImgObjectItem);
}


formPlaceAdd.addEventListener('submit', addPlace);