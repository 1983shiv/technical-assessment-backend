const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
function getEmailValidationReason(email) {
    // Too many @ symbols
    if ((email.match(/@/g) || []).length > 1) {
        return 'Email contains multiple "@" symbols';
    }
    // Missing @ symbol
    if (!email.includes('@')) {
        return 'Email does not include "@" symbol';
    }
    const [local, domain] = email.split('@');
    // Nothing before @
    if (!local) {
        return 'Email must have text before "@"';
    }
    // Nothing after @
    if (!domain) {
        return 'Email must have domain after "@"';
    }
    // Domain must contain at least one "."
    if (!domain.includes('.') || domain.startsWith('.') || domain.endsWith('.')) {
        return 'Email does not have a valid domain';
    }
    // If everything looks OK
    return '';
}
// ✅ FUNCTION TO IMPLEMENT
export function processEmails(rawEmails) {
    // ✅ TODO:
    let validEmails = [];
    let invalidEmails = [];
    // 1. Loop through each email
    rawEmails.forEach((email) => {
        const trimEmail = email.trim().toLowerCase();
        isValidEmail(trimEmail) ? validEmails.push(trimEmail) : '';
        if (!isValidEmail(trimEmail)) {
            invalidEmails.push({
                email: trimEmail,
                reason: getEmailValidationReason(trimEmail)
            });
        }
    });
    // rawEmails.forEach((email) => {
    //     const trimEmail = email.trim().toLowerCase();
    //     if(!isValidEmail(trimEmail)){
    //         invalidEmails.push({
    //             email: trimEmail,
    //             reason: getEmailValidationReason(trimEmail)
    //         })
    //     }
    // })
    // 2. Trim and lowercase the input
    // 3. Validate basic email format (e.g., contains @ and a domain)
    // 4. Separate valid from invalid
    // 5. Return result with both arrays populated
    // TBD
    return {
        validEmails,
        invalidEmails
    };
}
// const input = ['  Alice@example.com  ', 'Bob@domain.org'];
const input = ['foo', 'bar@', '@domain.com', 'user@com', 'bad@@email.com'];
console.log(processEmails(input));
