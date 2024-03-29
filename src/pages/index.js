import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import { initialCards } from '../components/cards.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import '../pages/index.css';


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

const elementsContainer = document.querySelector('.elements__list');


const config = {
    formSelector: '.popup-form',
    inputSelector: '.popup-form__field',
    submitButtonSelector: '.popup-form__button',
    inactiveButtonClass: 'popup-form__button_inactive',
    inputErrorClass: 'popup-form__field_type_error',
}

const validationEditProfile = new FormValidator(config, formProfileEdit);
validationEditProfile.enableValidation();
const validationAddPlace = new FormValidator(config, formPlaceAdd);
validationAddPlace.enableValidation();

// function openProfileEdit() {
//     openPopup(popupProfileEdit);
//     inputTitle.value = profileTitle.textContent;
//     inputSub.value = profileSub.textContent;
//     validationEditProfile.resetValidation();
// }

// function openPopup(popup) {
//     popup.classList.add('popup_opened');
//     popup.classList.add('animation');
//     document.addEventListener('keydown', closeOnEscapeKey);
// }


// const closeOnEscapeKey = (evt) => {
//     if (evt.key === 'Escape') {
//         const openSelectorPopup = document.querySelector('.popup_opened');
//         closePopup(openSelectorPopup);
//     }
// }

// function closePopup(popup) {
//     popup.classList.remove('popup_opened');
//     document.removeEventListener('keydown', closeOnEscapeKey);
// }



// const popupList = Array.from(document.querySelectorAll('.popup'));
// popupList.forEach((popup) => {
//     popup.addEventListener('click', (evt) => {

//         if (evt.target.classList.contains('popup-img-block__close') || evt.target.classList.contains('popup') || evt.target.classList.contains('popup-container__close')) {
//             closePopup(popup);
//         }
//     });


// });

// function handleProfileFormSubmit() {
//     // profileTitle.textContent = inputTitle.value;
//     // profileSub.textContent = inputSub.value;
// }

buttonEdit.addEventListener('click', () => {
    formProfile.open();
    const info = profile.getUserInfo();
    inputTitle.value = info.name;
    inputSub.value = info.about;
    validationEditProfile.resetValidation();
});

// formProfileEdit.addEventListener('submit', handleProfileFormSubmit);

const profileInfo = {
    nameSelector: '.profile-info__title',
    aboutSelector: '.profile-info__subtitle',
}

const profile = new UserInfo(profileInfo);


const cardsList = new Section({
        items: initialCards,
        renderer: (cardItem) => {
            // const card = new Card(cardItem.name, cardItem.link,
            //     (name, link) => {
            //         popupImage.open(name, link);
            //     }, '#element');
            // const cardElement = card.generateCard();
            cardsList.addItem(createCard(cardItem.name, cardItem.link));
        },
    },
    '.elements__list'
);

cardsList.renderItems();

const popupImage = new PopupWithImage('.popup-img');
popupImage.setEventListeners();


const formPlace = new PopupWithForm('.popup-add', {
        handleFormSubmit: ({ name, link }) => {

            // const card = new Card(name, link,
            //     (name, link) => {
            //         popupImage.open(name, link);
            //     }, '#element');
            // const cardElement = card.generateCard();
            // elementsContainer.prepend(cardElement);
            cardsList.addItem(createCard(name, link));
            formPlace.close();
        }
    }

);

formPlace.setEventListeners();

const formProfile = new PopupWithForm('.popup-profile-edit', {
    handleFormSubmit: ({ name, about }) => {
        profile.setUserInfo(name, about);
        formProfile.close();
    }

});

formProfile.setEventListeners();

buttonAddplace.addEventListener('click', function() {
    formPlace.open();
    validationAddPlace.resetValidation();
    // formPlaceAdd.reset();
});

// initialCards.forEach((item) => {
//     elementsList.prepend(createCard(item.name, item.link));
// });

function createCard(name, link) {
    const card = new Card(name, link,
        (name, link) => {
            popupImage.open(name, link);
        }, '#element');
    const cardElement = card.generateCard();
    return cardElement;
}

// function addPlace() {
//     elementsList.prepend(createCard(inputPlace.value, inputLink.value));
//     popupPlace.close();
//     formPlaceAdd.reset();
// }

// function handleCardClick(name, link) {
//     popupImage.open(name, link, popupImgObjectItem, popupImgObjectText);
// }

// formPlaceAdd.addEventListener('submit', addPlace);