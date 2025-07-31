export type EmailValidationResult = {
  validEmails: string[];
  invalidEmails: { email: string; reason: string }[];
};

// ✅ FUNCTION TO IMPLEMENT
export function processEmails(rawEmails: string[]): EmailValidationResult {
  // ✅ TODO:
  // 1. Loop through each email
  // 2. Trim and lowercase the input
  // 3. Validate basic email format (e.g., contains @ and a domain)
  // 4. Separate valid from invalid
  // 5. Return result with both arrays populated

  // TBD

  return {
    validEmails: [],
    invalidEmails: []
  };
}
