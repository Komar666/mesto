const popup = document.querySelector('.popup');
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
    placeElement.querySelector('.element__images').src = link;
    placeElement.querySelector('.element__images').alt = name;

    placeElement.querySelector('.element-group__icon').addEventListener('click', function(evt) {
        const eventTarget = evt.target;
        eventTarget.classList.add('unheart');
        eventTarget.classList.toggle('element-group__icon');


    });

    placeElement.querySelector('.element__delete').addEventListener('click', function() {
        const elementDeleteobj = placeElement.querySelector('.element__delete').closest('.element');
        elementDeleteobj.remove();
    });

    placeElement.querySelector('.element__images').addEventListener('click', function() {
        openPopup(popupImg);

        document.querySelector('.popup-img-object__item').src = link;

        document.querySelector('.popup-img-object__item').alt = name;

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





const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];



for (let i = 0; i < initialCards.length; i++) {

    elementsList.prepend(createCard(initialCards[i].name, initialCards[i].link));

    // const element = document.createElement('li');
    // element.classList.add('element');
    // const elementDelete = document.createElement('img');
    // elementDelete.classList.add('element__delete');
    // elementDelete.src = 'images/trash.svg';
    // const elementImages = document.createElement('img');
    // elementImages.classList.add('element__images');
    // elementImages.src = initialCards[i].link;
    // const elementGroup = document.createElement('div');
    // elementGroup.classList.add('element-group');
    // const elementGroupText = document.createElement('h2');
    // elementGroupText.classList.add('element-group__text');
    // elementGroupText.textContent = initialCards[i].name;
    // const elementGroupIcon = document.createElement('button');
    // elementGroupIcon.classList.add('element-group__icon');
    // const elementGroupIconImg = document.createElement('img');
    // elementGroupIconImg.classList.add('unheart');

    // elementGroupIconImg.src = 'images/Heart.svg';
    // elementGroup.append(elementGroupText, elementGroupIcon);
    // element.append(elementImages, elementDelete, elementGroup);
    // elementGroupIcon.append(elementGroupIconImg);
    // elementsList.append(element);

    // elementGroupIconImg.addEventListener('click', function(evt) {
    //     const eventTarget = evt.target;
    //     if (eventTarget.classList.contains('unheart')) {
    //         eventTarget.setAttribute('src', 'images/Union.svg');
    //     } else {
    //         eventTarget.setAttribute('src', 'images/Heart.svg');
    //     }
    //     eventTarget.classList.toggle('unheart');
    // });

    // elementImages.addEventListener('click', function() {

    //     openPopup(popupImg);

    //     const poupImgObjectLink = document.querySelector('.popup-img-object__item').src = initialCards[i].link;

    //     const popupImgObjectText = document.querySelector('.popup-img-object__text').textContent = initialCards[i].name;



    // });



    // elementDelete.addEventListener('click', function() {
    //     elementDeleteobj = elementDelete.closest('.element');
    //     elementDeleteobj.remove();
    // });
}

buttonCloseImg.addEventListener('click', function() {
    closePopup(popupImg);
})