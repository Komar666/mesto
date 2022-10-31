export default class UserInfo {
    constructor(profileInfo) {
        this._nameSelector = profileInfo.nameSelector;
        this._aboutSelector = profileInfo.aboutSelector;
    }

    getUserInfo() {
        const name = document.querySelector(this._nameSelector).textContent;
        const about = document.querySelector(this._aboutSelector).textContent;
        return { name, about };
    }

    setUserInfo(inputTitle, inputSub) {
        document.querySelector(this._nameSelector).textContent = inputTitle.value;
        document.querySelector(this._aboutSelector).textContent = inputSub.value;
    }

}