"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpcomingBirthdays = getUpcomingBirthdays;
// 🟩 MOCK DATABASE
var users = [
    { id: 'u1', name: 'Alice', friends: ['u2', 'u3'] },
    { id: 'u2', name: 'Bob', friends: ['u1'] },
    { id: 'u3', name: 'Charlie', friends: ['u1'] },
    { id: 'u4', name: 'Daisy', friends: ['u2, u5'] },
    { id: 'u5', name: 'Eva', friends: ['u4'] },
];
var friends = [
    { id: 'u1', name: 'Alice', birthday: '1990-08-01' },
    { id: 'u2', name: 'Bob', birthday: '1990-08-02' },
    { id: 'u3', name: 'Charlie', birthday: '1990-08-06' },
    { id: 'u4', name: 'Daisy', birthday: '1990-08-13' },
    { id: 'u5', name: 'Eva', birthday: '1990-08-16' }
];
// 🟦 FUNCTION TO COMPLETE
function getUpcomingBirthdays(userId, today) {
    // ✅ TODO:
    // 1. Find the user by ID
    var user = users.find(function (user) { return user.id === userId; });
    // 2. Get the list of friend IDs
    var userAllFriends = user === null || user === void 0 ? void 0 : user.friends;
    // 3. Lookup those friends in the database
    var filteredFriends = friends.filter(function (friend) {
        return userAllFriends === null || userAllFriends === void 0 ? void 0 : userAllFriends.includes(friend.id);
    });
    // console.log({filteredFriends})
    // 4. Filter friends whose birthdays fall within the next 7 days from 'today'
    var next7Days = new Date(today);
    next7Days.setDate(today.getDate() + 7);
    var upcomingBirthdays = filteredFriends.filter(function (friend) {
        var _a = friend.birthday.split('-').map(Number), year = _a[0], month = _a[1], day = _a[2];
        var birthdayThisYear = new Date(today.getFullYear(), month - 1, day);
        return birthdayThisYear >= today && birthdayThisYear <= next7Days;
    });
    // console.log({upcomingBirthdays})
    // 5. Sort them by birthday date (MM-DD)
    var sortedUpcomingBirthdays = upcomingBirthdays.sort(function (a, b) {
        return new Date(a.birthday).getTime() - new Date(b.birthday).getTime();
    });
    // TBD
    return sortedUpcomingBirthdays; // placeholder
}
// const today = new Date('2025-08-04');
// getUpcomingBirthdays('u1', today);
