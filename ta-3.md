Here is your **Technical Assessment #3 (ta-03)**
Difficulty: **Easy**
Stack: **Node.js + Express (MongoDB optional)**
Language: **TypeScript**
Focus: **API + Validation + Data Transformation**

---

## 🧾 Real-World Scenario: **User Email Validator & Normalizer**

You're building part of an onboarding pipeline that processes user signups. Your task is to implement a service that:

1. Accepts a list of raw email addresses
2. Validates whether they are properly formatted
3. Normalizes them (e.g., trims, lowercases, removes extra spaces)
4. Returns a result showing which emails are valid or invalid

---

### 🧩 Expected Behavior

* All emails should be **trimmed** and **lowercased**
* Invalid emails must be reported with a reason
* Output should categorize emails as:

  * `validEmails: string[]`
  * `invalidEmails: { email: string; reason: string }[]`

---

## 📁 File: `emailProcessor.ts`

```ts
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
```

---

## 🧪 File: `emailProcessor.test.ts`

```ts
import { processEmails } from './emailProcessor';

describe('processEmails', () => {
  it('correctly classifies valid emails', () => {
    const input = ['  Alice@example.com  ', 'Bob@domain.org'];
    const result = processEmails(input);
    expect(result.validEmails).toEqual(['alice@example.com', 'bob@domain.org']);
    expect(result.invalidEmails).toEqual([]);
  });

  it('handles invalid formats', () => {
    const input = ['foo', 'bar@', '@domain.com', 'user@com', 'bad@@email.com'];
    const result = processEmails(input);
    expect(result.validEmails).toEqual([]);
    expect(result.invalidEmails.length).toBe(input.length);
  });

  it('handles mixed valid/invalid', () => {
    const input = ['valid@domain.com', '  invalid  ', 'no-at-symbol.com'];
    const result = processEmails(input);
    expect(result.validEmails).toEqual(['valid@domain.com']);
    expect(result.invalidEmails.length).toBe(2);
  });

  it('is resilient to empty or null inputs', () => {
    const result = processEmails([]);
    expect(result.validEmails).toEqual([]);
    expect(result.invalidEmails).toEqual([]);
  });
});
```

---

## ⚠️ Edge Cases & Real-World Expectations

| Scenario                              | Required   | Notes                        |
| ------------------------------------- | ---------- | ---------------------------- |
| Emails with upper/lower casing        | ✅          | Normalize to lowercase       |
| Emails with extra spaces              | ✅          | Trim before validating       |
| Empty string or whitespace only       | ✅          | Mark as invalid              |
| Emails missing `@` or domain part     | ✅          | Invalid                      |
| Emails with multiple `@` symbols      | ✅          | Invalid                      |
| Null, undefined, or non-string inputs | ❌ Optional | Could filter or reject early |
| Duplicates                            | ❌          | Can ignore unless specified  |

---

## 🧹 Best Practices to Follow

* Use helper functions (e.g., `isValidEmail`, `normalizeEmail`)
* Avoid mutating the input array
* Keep logic pure and testable
* Use clear error messages for invalid emails (e.g., "missing @", "missing domain", "too many @")

---

Would you like a **MongoDB-integrated version** next (e.g., CRUD API with data validations)? Or continue with pure logic/function assessments at **medium** difficulty?
