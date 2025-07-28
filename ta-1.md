Perfect! Here's your **Technical Assessment #1** (difficulty: **Easy**, backend-focused in TypeScript) – complete with:

* 📄 Scenario
* 🧩 Partially written code with **TBD** sections
* ✅ Jest test cases
* ⚠️ Real-world expectations and edge cases

---

## 🧪 Prompt Template (for future use)

```
Generate a backend technical assessment with the following:
- Language: TypeScript
- Stack: Node.js + Express + MongoDB (optional)
- Format: Real-world scenario
- Difficulty: <easy|medium|hard>
- Requirements:
  - Provide partially completed source code with clearly marked TBD areas
  - Include test cases written in Jest
  - Include real-world edge-case expectations and best practices
```

---

## ✅ Technical Assessment #1: **User Birthday Reminder API**

### 🧾 Scenario:

You are building a simple microservice for a calendar app that reminds users about their friends’ birthdays. You need to implement a REST API endpoint that:

* Accepts a `userId` as input
* Looks up the user and their list of friends from a mock database
* Filters out friends whose birthdays are **within the next 7 days**
* Returns a sorted list of those upcoming birthdays in ascending order of date

---

### 📁 File: `birthdayReminder.ts`

```ts
type User = {
  id: string;
  name: string;
  friends: string[]; // List of friend userIds
};

type Friend = {
  id: string;
  name: string;
  birthday: string; // ISO date format, e.g., "1990-08-05"
};

// 🟩 MOCK DATABASE
const users: User[] = [
  { id: 'u1', name: 'Alice', friends: ['u2', 'u3'] },
  { id: 'u2', name: 'Bob', friends: ['u1'] },
  { id: 'u3', name: 'Charlie', friends: ['u1'] },
];

const friends: Friend[] = [
  { id: 'u2', name: 'Bob', birthday: '1990-08-02' },
  { id: 'u3', name: 'Charlie', birthday: '1990-08-10' },
];

// 🟦 FUNCTION TO COMPLETE
export function getUpcomingBirthdays(userId: string, today: Date): Friend[] {
  // ✅ TODO:
  // 1. Find the user by ID
  // 2. Get the list of friend IDs
  // 3. Lookup those friends in the database
  // 4. Filter friends whose birthdays fall within the next 7 days from 'today'
  // 5. Sort them by birthday date (MM-DD)

  // TBD

  return []; // placeholder
}
```

---

### 🧪 File: `birthdayReminder.test.ts`

```ts
import { getUpcomingBirthdays } from './birthdayReminder';

describe('getUpcomingBirthdays', () => {
  it('returns upcoming birthdays within 7 days', () => {
    const today = new Date('2025-07-28');
    const result = getUpcomingBirthdays('u1', today);

    expect(result).toEqual([
      { id: 'u2', name: 'Bob', birthday: '1990-08-02' },
    ]);
  });

  it('returns empty if no upcoming birthdays', () => {
    const today = new Date('2025-01-01');
    const result = getUpcomingBirthdays('u1', today);
    expect(result).toEqual([]);
  });

  it('returns sorted birthdays if multiple found', () => {
    const today = new Date('2025-08-01');
    const result = getUpcomingBirthdays('u1', today);
    expect(result.map(f => f.name)).toEqual(['Bob', 'Charlie']);
  });

  it('handles invalid user ID gracefully', () => {
    const today = new Date('2025-07-28');
    const result = getUpcomingBirthdays('invalid_user', today);
    expect(result).toEqual([]);
  });
});
```

---

### ⚠️ Edge Cases & Best Practices to Cover:

* Handle invalid user IDs (not found)
* Handle friends whose birthday is near year-end (e.g., Dec 31 → Jan 2 edge case)
* Don’t mutate input data
* Don’t use deprecated Date APIs (prefer `toISOString()`, `getMonth()`, `getDate()`)
* Aim for **pure functions**, no external side-effects
* Use constants or helpers if logic gets verbose

---

### ✅ Once You’re Done:

Paste your completed `getUpcomingBirthdays()` function here.
I’ll review and give you feedback on:

* ✅ Correctness
* 💡 Code quality and best practices
* 🧹 Readability and modularity
* ⚠️ Potential bugs or edge cases missed
* 🚀 Suggestions for improvements or optimizations

Ready when you are!
