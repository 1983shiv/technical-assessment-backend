export function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function isValidRating(rating: number): boolean {
    return Number.isInteger(rating) && rating >= 1 && rating <= 5;
}

export function isValidMessage(txt?: string): boolean {
    return !txt || txt.length <= 500;
    // if(txt.length <= 500) return true;
    // return false;
}