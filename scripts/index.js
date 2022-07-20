const popupProfileEdit = document.querySelector('.popup-profile-edit');
const profileTitle = document.querySelector('.profile-info__title');
const profileSub = document.querySelector('.profile-info__subtitle');
const buttonEdit = document.querySelector('.profile-info__button');
const formProfileEdit = document.querySelector('.form-profile-edit ');
const formButton = document.querySelector('.popup-form__button');
const inputTitle = document.querySelector('.popup-form__field');
const inputSub = document.querySelector('.popup-form__field_type_sub');

const popupAddPlace = document.querySelector('.popup-add');
const formPlaceAdd = document.querySelector('.form-place-add');
const buttonCloseEditProfile = document.querySelector('.button-close-edit-profile');
const buttonCloseAddPlace = document.querySelector('.popup-container__close_type_add');
const buttonCloseImg = document.querySelector('.popup-img-block__close_type_img')
const buttonAddplace = document.querySelector('.profile__button');
const inputPlace = document.querySelector('.popup-form__field_type_name');
const inputLink = document.querySelector('.popup-form__field_type_link');

const popupImg = document.querySelector('.popup-img');

const elementsList = document.querySelector('.elements__list');


function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = inputTitle.value;
    profileSub.textContent = inputSub.value;
    closePopup(popupProfileEdit);
}

function openProfileEdit() {
    openPopup(popupProfileEdit);
    inputTitle.value = profileTitle.textContent;
    inputSub.value = profileSub.textContent;
}

function openPopup(popup) {

    popup.classList.add('popup_opened');
}

function closePopup(popup) {

    popup.classList.remove('popup_opened');
    popup.classList.add('animation');

}

function createCard(name, link) {

    const place = document.querySelector('#element').content;
    const placeElement = place.querySelector('.element').cloneNode(true);
    placeElement.querySelector('.element-group__text').textContent = name;
    const elementImages = placeElement.querySelector('.element__images');
    elementImages.src = link;
    elementImages.alt = name;

    placeElement.querySelector('.element-group__icon').addEventListener('click', function(evt) {
        const eventTarget = evt.target;
        eventTarget.classList.toggle('element-group__icon-active');


    });

    placeElement.querySelector('.element__delete').addEventListener('click', function() {
        const elementDeleteobj = placeElement.querySelector('.element__delete').closest('.element');
        elementDeleteobj.remove();
    });

    elementImages.addEventListener('click', function() {
        openPopup(popupImg);

        const popupImgObjectItem = document.querySelector('.popup-img-object__item');

        popupImgObjectItem.src = link;

        popupImgObjectItem.alt = name;

        document.querySelector('.popup-img-object__text').textContent = name;



    });

    return placeElement;


}

function addPlace(evt) {

    evt.preventDefault();
    elementsList.prepend(createCard(inputPlace.value, inputLink.value));
    formPlaceAdd.reset();
    closePopup(popupAddPlace);

}



buttonEdit.addEventListener('click', openProfileEdit);

buttonAddplace.addEventListener('click', function() {
    openPopup(popupAddPlace);
});

buttonCloseEditProfile.addEventListener('click', function() {
    closePopup(popupProfileEdit);
});

buttonCloseAddPlace.addEventListener('click', function() {
    closePopup(popupAddPlace);
});

formProfileEdit.addEventListener('submit', handleProfileFormSubmit);

formPlaceAdd.addEventListener('submit', addPlace);



for (let i = 0; i < initialCards.length; i++) {

    elementsList.prepend(createCard(initialCards[i].name, initialCards[i].link));

}

buttonCloseImg.addEventListener('click', function() {
    closePopup(popupImg);
})