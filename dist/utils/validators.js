export function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
export function isValidRating(rating) {
    return Number.isInteger(rating) && rating >= 1 && rating <= 5;
}
export function isValidMessage(txt) {
    return !txt || txt.length <= 500;
    // if(txt.length <= 500) return true;
    // return false;
}
