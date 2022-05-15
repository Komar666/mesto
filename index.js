let popup = document.querySelector('.popup');

let profileInfo = document.querySelector('.profile-info');

let editButton = profileInfo.querySelector('.profile-info__button');
editButton.addEventListener('click', function() {
    popup.classList.add('popup_opened');
});

let popupClose = popup.querySelector('.popup-container__close');
popupClose.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
});






let profileTitle = profileInfo.querySelector('.profile-info__title');
let profileSub = profileInfo.querySelector('.profile-info__subtitle');



let formElement = popup.querySelector('.popup-form');
let input = formElement.querySelector('.popup-form__field');
let inputSub = formElement.querySelector('.popup-form__field_sub');
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