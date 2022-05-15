let popup = document.querySelector('.popup');

let profileInfo = document.querySelector('.Profile__info');

let editButton = profileInfo.querySelector('.Profile__info_button');
editButton.addEventListener('click', function() {
    popup.classList.add('popup_opened');
});

let popupClose = popup.querySelector('.popup__container_close');
popupClose.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
});






let profileTitle = profileInfo.querySelector('.Profile__info_title');
let profileSub = profileInfo.querySelector('.Profile__info_subtitle');



let formElement = popup.querySelector('.popup__container_form');
let input = formElement.querySelector('.popup__container_field');
let inputSub = formElement.querySelector('.popup__container_field_sub');
input.setAttribute('value', profileTitle.textContent);
inputSub.setAttribute('value', profileSub.textContent);

function formSubmitHandler(evt) {
    evt.preventDefault();
    let getInput = input.value;
    let getSub = inputSub.value;
    profileTitle.textContent = getInput;
    profileSub.textContent = getSub;
    popup.classList.remove('popup_opened');
}


formElement.addEventListener('submit', formSubmitHandler);

let heart = document.querySelectorAll('.Elements__element_group_icon');

function heartClick() {
    this.setAttribute('src', 'images/Black.svg');
}

heart[0].addEventListener('click', heartClick);