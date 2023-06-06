import moment from "moment";

export function isValidName(name) {
    const nameRegex = /^[a-zA-ZÀ-ú]+(([',. -][a-zA-ZÀ-ú ])?[a-zA-ZÀ-ú]*)*$/;
    return nameRegex.test(name);
}

export function isValidBirthDate(date, minimumAge) {
    const formatoData = 'DD/MM/YYYY';
    const hoje = moment();
    const dataNascimentoMoment = moment(date, formatoData);
    const idade = hoje.diff(dataNascimentoMoment, 'years');

    if (idade < minimumAge) {
        return false;
    }

    return true;
}

export function isValidDocument(document) {
    const cpfRegex = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2})$/;
    return cpfRegex.test(document);
}

export function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export function isValidPhone(phone) {
    const phoneRegex = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;
    return phoneRegex.test(phone);
}

export function isValidZipCode(zipCode) {
    const zipCodeRegex = /^[0-9]{5}-[0-9]{3}$/;
    return zipCodeRegex.test(zipCode);
}

export function notEmpty(items = []) {
    return items.every((item) => item !== null && item !== undefined && item !== "");
}