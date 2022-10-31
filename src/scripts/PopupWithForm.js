import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    setEventListeners() {
        super.setEventListeners();

        this._formSelector = this._popupSelector.querySelector('.popup-form');
        console.log(this._formSelector);
        this._formSelector.addEventListener('submit', (evt) => {

            evt.preventDefault();

            // добавим вызов функции _handleFormSubmit
            // передадим ей объект — результат работы _getInputValues
            this._handleFormSubmit(this._getInputValues());
            this.close();

        });

    }

    close() {
        super.close();
        this._formSelector.reset();
    }

    _getInputValues() {
        // достаём все элементы полей
        this._inputList = this._popupSelector.querySelectorAll('.popup-form__field');
        console.log(this._inputList);
        // создаём пустой объект
        this._formValues = {};

        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        // возвращаем объект значений
        return this._formValues;
    }


}