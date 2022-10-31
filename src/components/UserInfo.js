export default class UserInfo {
    constructor(profileInfo) {
        this._name = document.querySelector(profileInfo.nameSelector);
        this._about = document.querySelector(profileInfo.aboutSelector);
    }

    getUserInfo() {

        return { name: this._name.textContent, about: this._about.textContent };

    }

    setUserInfo(name, about) {
        this._name.textContent = name;
        this._about.textContent = about;
    }

}