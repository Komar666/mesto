const popupProfileEdit = document.querySelector('.popup-profile-edit');
const profileTitle = document.querySelector('.profile-info__title');
const profileSub = document.querySelector('.profile-info__subtitle');
const buttonEdit = document.querySelector('.profile-info__button');
const formProfileEdit = document.querySelector('.form-profile-edit ');
const inputTitle = document.querySelector('.popup-form__field');
const inputSub = document.querySelector('.popup-form__field_type_sub');
const popupForm = document.querySelector('.popup-form');
const formButton = document.querySelector('.popup-form__button');


const popupAddPlace = document.querySelector('.popup-add');
const formPlaceAdd = document.querySelector('.form-place-add');

const buttonCloseImg = document.querySelector('.popup-img-block__close_type_img')
const buttonAddplace = document.querySelector('.profile__button');
const inputPlace = document.querySelector('.popup-form__field_type_name');
const inputLink = document.querySelector('.popup-form__field_type_link');

const popupImg = document.querySelector('.popup-img');
const popupImgObjectItem = document.querySelector('.popup-img-object__item');

const elementsList = document.querySelector('.elements__list');

function handleProfileFormSubmit(evt) {

    profileTitle.textContent = inputTitle.value;
    profileSub.textContent = inputSub.value;
    closePopup(popupProfileEdit);
}

// Вызовем функцию
enableValidation({
    formSelector: '.popup-form',
    inputSelector: '.popup-form__field',
    submitButtonSelector: '.popup-form__button',
    inactiveButtonClass: 'popup-form__button_inactive',
    inputErrorClass: 'popup-form__field_type_error',
});

function openProfileEdit() {
    openPopup(popupProfileEdit);
    inputTitle.value = profileTitle.textContent;
    inputSub.value = profileSub.textContent;
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.classList.add('animation');
    document.addEventListener('keydown', closeOnEscapeKey);
}


const closeOnEscapeKey = (evt) => {
    if (evt.key === 'Escape') {
        const closeEsc = document.querySelector('.popup_opened');
        closePopup(closeEsc);
    }
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeOnEscapeKey);
}

function createCard(name, link) {

    const place = document.querySelector('#element').content;
    const placeElement = place.querySelector('.element').cloneNode(true);
    placeElement.querySelector('.element-group__text').textContent = name;
    const elementImages = placeElement.querySelector('.element__images');
    elementImages.src = link;
    elementImages.alt = name;

    placeElement.querySelector('.element-group__icon').addEventListener('click', function(evt) {
        const likeIcon = evt.target;
        likeIcon.classList.toggle('element-group__icon-active');
    });

    placeElement.querySelector('.element__delete').addEventListener('click', function() {
        const elementDeleteobj = placeElement.querySelector('.element__delete').closest('.element');
        elementDeleteobj.remove();
    });

    elementImages.addEventListener('click', function() {

        openPopup(popupImg);

        popupImgObjectItem.src = link;

        popupImgObjectItem.alt = name;

        document.querySelector('.popup-img-object__text').textContent = name;

    });

    return placeElement;

}

function addPlace(evt) {

    elementsList.prepend(createCard(inputPlace.value, inputLink.value));

    console.log(formButton);

    formPlaceAdd.reset();

    closePopup(popupAddPlace);
}





buttonEdit.addEventListener('click', openProfileEdit);

buttonAddplace.addEventListener('click', function() {
    openPopup(popupAddPlace);

});

formProfileEdit.addEventListener('submit', handleProfileFormSubmit);

formPlaceAdd.addEventListener('submit', addPlace);

const popupList = Array.from(document.querySelectorAll('.popup'));
popupList.forEach((popup) => {
    popup.addEventListener('click', (evt) => {

        if (evt.target.classList.contains('popup-img-block__close') || evt.target.classList.contains('popup') || evt.target.classList.contains('popup-container__close')) {
            closePopup(popup);
        }
    });


});

for (let i = 0; i < initialCards.length; i++) {

    elementsList.prepend(createCard(initialCards[i].name, initialCards[i].link));

}