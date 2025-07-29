Great job completing the first assessment! Let's do a full code review across four areas: **correctness**, **structure & clarity**, **edge case handling**, and **best practices**.

---

## ✅ 1. Correctness

Your function works **almost perfectly** for the test cases.

However, it will **miss** birthdays that occur within the first 7 days of **next year** (e.g., Dec 28 → Jan 2), because you’re using `birthdayThisYear` and comparing it to `today` and `today + 7 days`.

This logic works fine for most of the year but fails when the window crosses the year boundary. That’s a common real-world edge case.

### ❗ Example Problem Case:

```ts
const today = new Date('2025-12-28');
```

A friend with a birthday on `1990-01-02` will **not be included**, even though it’s within 7 days.

---

## 🔧 Suggested Fix

Use a "day-of-year" comparison instead of direct date comparison with the year hardcoded. Here’s how:

```ts
function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}
```

Then in your filter:

```ts
const todayDay = getDayOfYear(today);
const next7Day = (todayDay + 7) % 365;

const upcomingBirthdays = filteredFriends.filter(friend => {
  const [_, month, day] = friend.birthday.split('-').map(Number);
  const birthday = new Date(today.getFullYear(), month - 1, day);
  const birthdayDayOfYear = getDayOfYear(birthday);

  if (todayDay <= next7Day) {
    return birthdayDayOfYear >= todayDay && birthdayDayOfYear <= next7Day;
  } else {
    // Wrap around end of year
    return birthdayDayOfYear >= todayDay || birthdayDayOfYear <= next7Day;
  }
});
```

---

## ✨ 2. Code Structure & Clarity

✅ **Readable:** Easy to follow, descriptive variable names
✅ **Modularizable:** This function can later be split into smaller ones (`getUserById`, `getFriends`, `filterBirthdays`, etc.)
✅ **No mutation of inputs**
✅ **No hardcoding of date math**
❌ **Date parsing directly from birthday strings:** can be risky without validation

💡 Optional improvement: use `dayjs` or `date-fns` for easier and more reliable date handling, especially for production apps.

---

## ⚠️ 3. Edge Case Handling

| Edge Case                              | Status                   | Suggestion                          |
| -------------------------------------- | ------------------------ | ----------------------------------- |
| Invalid `userId`                       | ✅ Handled (returns `[]`) | Good                                |
| No friends                             | ✅                        | Good                                |
| Friend not found in `friends` DB       | ✅                        | Good                                |
| Birthdays within 7 days but cross year | ❌ **Missed**             | See fix above                       |
| Friends with malformed birthdays       | ❌ Not handled            | Could add validation                |
| Duplicated friend IDs                  | ❌ Not handled            | Consider de-duplication using `Set` |

---

## 🧼 4. Code Cleanliness & Best Practices

### ✅ Good:

* Pure function (no side effects)
* Avoids mutating `users`, `friends`, or `today`
* Nicely scoped variables
* Uses `.filter()` and `.sort()` idiomatically
* `return []` fallback is graceful

### 🚫 Could Be Improved:

* Sorting is based on full ISO date, which may cause incorrect sorting by **year**. You want to sort by **month/day only** (e.g., MM-DD).

```ts
const sortedUpcomingBirthdays = upcomingBirthdays.sort((a, b) => {
  const aDate = new Date(a.birthday);
  const bDate = new Date(b.birthday);
  return (aDate.getMonth() * 100 + aDate.getDate()) - (bDate.getMonth() * 100 + bDate.getDate());
});
```

---

## 🟢 Final Grade: **8.5 / 10**

* ✅ Excellent readability and structure
* ✅ Functional correctness in most situations
* ⚠️ Misses edge case of year rollover
* ⚠️ Sorting by full birthday may give unexpected results
* ⚠️ No error handling for invalid date formats (optional at this level)

---

## 🧠 Bonus Improvement (Optional)

Extract reusable helpers to make your code testable and DRY:

```ts
function findUserById(userId: string): User | undefined {
  return users.find(user => user.id === userId);
}

function getFriendsList(friendIds: string[]): Friend[] {
  return friends.filter(friend => friendIds.includes(friend.id));
}
```

---
