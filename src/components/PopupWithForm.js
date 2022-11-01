import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup-form');
        this._inputList = this._form.querySelectorAll('.popup-form__field');
    }

    setEventListeners() {
        super.setEventListeners();



        this._form.addEventListener('submit', (evt) => {

            evt.preventDefault();

            // добавим вызов функции _handleFormSubmit
            // передадим ей объект — результат работы _getInputValues
            this._handleFormSubmit(this._getInputValues());
            // this.close();

        });

    }

    close() {
        super.close();
        this._form.reset();
    }

    _getInputValues() {


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