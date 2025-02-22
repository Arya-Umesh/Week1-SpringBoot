import CryptoJS from "crypto-js";

const SECRET_KEY = 'secretKey';

const encryptData = (name, data) => {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    localStorage.setItem(name, encrypted);
}

const decryptData = (name) => {
    const encrypted = localStorage.getItem(name);
    const decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY).toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
}

export {
    encryptData,
    decryptData
};