const popup = document.querySelector('.popup');
const profileTitle = document.querySelector('.profile-info__title');
const profileSub = document.querySelector('.profile-info__subtitle');
const editButton = document.querySelector('.profile-info__button');
const formElement = popup.querySelector('.popup-form');
const formButton = formElement.querySelector('.popup-form__button')
const inputTitle = formElement.querySelector('.popup-form__field');
const inputSub = formElement.querySelector('.popup-form__field_type_sub');

const popupAdd = document.querySelector('.popup-add');
const formElementAdd = document.querySelector('.popup-form-add');
const closeButton = document.querySelector('.popup-container__close');
const closeButtonAdd = document.querySelector('.popup-container__close_type_add');
const closeButtonImg = document.querySelector('.popup-container__close_type_img')
const addButton = document.querySelector('.profile__button');
const inputPlace = document.querySelector('.popup-form__field_type_name');
const inputLink = document.querySelector('.popup-form__field_type_link');

const popupImg = document.querySelector('.popup-img');

const elementsList = document.querySelector('.elements__list');


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

function popupAddOpen() {
    popupAdd.classList.add('popup_opened');
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function popupAddClose() {
    popupAdd.classList.remove('popup_opened');
}

function addPlace(evt) {
    evt.preventDefault();
    const place = document.querySelector('#element').content;
    const placeElement = place.querySelector('.element').cloneNode(true);
    const text = inputPlace.value;
    const src = inputLink.value;
    placeElement.querySelector('.element-group__text').textContent = text;
    placeElement.querySelector('.element__images').src = src;


    placeElement.querySelector('.heart-icon').addEventListener('click', function(evt) {
        const eventTarget = evt.target;
        if (eventTarget.classList.contains('unheart')) {
            eventTarget.setAttribute('src', 'images/Union.svg');
        } else {
            eventTarget.setAttribute('src', 'images/Heart.svg');
        }
        eventTarget.classList.toggle('unheart')

    });

    placeElement.querySelector('.element__delete').addEventListener('click', function() {
        let elementDeleteobj = placeElement.querySelector('.element__delete').closest('.element');
        elementDeleteobj.remove();
    });

    placeElement.querySelector('.element__images').addEventListener('click', function() {
        popupImg.classList.add('popup_opened');
        const popupImgBlock = document.querySelector('.popup-img-block');
        const popupImgItem = document.querySelector('#popup-img-object').content;
        const popupImgItemElement = popupImgItem.querySelector('.popup-img-object').cloneNode(true);

        popupImgItemElement.querySelector('.popup-img-object__item').src = src;
        popupImgItemElement.querySelector('.popup-img-object__text').textContent = text;
        popupImgBlock.append(popupImgItemElement);
    });

    elementsList.prepend(placeElement);
    popupAddClose();
}



editButton.addEventListener('click', popupOpen);
addButton.addEventListener('click', popupAddOpen);
closeButton.addEventListener('click', popupClose);
closeButtonAdd.addEventListener('click', popupAddClose);
formElement.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', addPlace);





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

    const element = document.createElement('li');
    element.classList.add('element');
    const elementDelete = document.createElement('img');
    elementDelete.classList.add('element__delete');
    elementDelete.src = 'images/trash.svg';
    const elementImages = document.createElement('img');
    elementImages.classList.add('element__images');
    elementImages.src = initialCards[i].link;
    const elementGroup = document.createElement('div');
    elementGroup.classList.add('element-group');
    const elementGroupText = document.createElement('h2');
    elementGroupText.classList.add('element-group__text');
    elementGroupText.textContent = initialCards[i].name;
    const elementGroupIcon = document.createElement('button');
    elementGroupIcon.classList.add('element-group__icon');
    const elementGroupIconImg = document.createElement('img');
    elementGroupIconImg.classList.add('unheart');

    elementGroupIconImg.src = 'images/Heart.svg';
    elementGroup.append(elementGroupText, elementGroupIcon);
    element.append(elementImages, elementDelete, elementGroup);
    elementGroupIcon.append(elementGroupIconImg);
    elementsList.append(element);

    elementGroupIconImg.addEventListener('click', function(evt) {
        const eventTarget = evt.target;
        if (eventTarget.classList.contains('unheart')) {
            eventTarget.setAttribute('src', 'images/Union.svg');
        } else {
            eventTarget.setAttribute('src', 'images/Heart.svg');
        }
        eventTarget.classList.toggle('unheart');
    });

    elementImages.addEventListener('click', function() {

        popupImg.classList.add('popup_opened');
        const popupImgBlock = document.querySelector('.popup-img-block');
        const popupImgItem = document.querySelector('#popup-img-object').content;
        const popupImgItemElement = popupImgItem.querySelector('.popup-img-object').cloneNode(true);

        popupImgItemElement.querySelector('.popup-img-object__item').src = initialCards[i].link;
        popupImgItemElement.querySelector('.popup-img-object__text').textContent = initialCards[i].name;
        popupImgBlock.append(popupImgItemElement);
    });

    closeButtonImg.addEventListener('click', function() {
        popupImg.classList.remove('popup_opened');
        popupImg.querySelector('.popup-img-object').remove();
    });

    elementDelete.addEventListener('click', function() {
        elementDeleteobj = elementDelete.closest('.element');
        elementDeleteobj.remove();
    });



}