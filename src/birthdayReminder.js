"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpcomingBirthdays = getUpcomingBirthdays;
// 🟩 MOCK DATABASE
var users = [
    { id: 'u1', name: 'Alice', friends: ['u2', 'u3'] },
    { id: 'u2', name: 'Bob', friends: ['u1'] },
    { id: 'u3', name: 'Charlie', friends: ['u1'] },
];
var friends = [
    { id: 'u2', name: 'Bob', birthday: '1990-08-02' },
    { id: 'u3', name: 'Charlie', birthday: '1990-08-10' },
];
// 🟦 FUNCTION TO COMPLETE
function getUpcomingBirthdays(userId, today) {
    // ✅ TODO:
    var user = users.find(function (user) { return user.id === userId; });
    // 1. Find the user by ID
    // 2. Get the list of friend IDs
    var ListofFriends = user === null || user === void 0 ? void 0 : user.friends;
    // 3. Lookup those friends in the database
    var listfreinds = friends.filter(function (friend) {
        return ListofFriends === null || ListofFriends === void 0 ? void 0 : ListofFriends.includes(friend.id);
    });
    console.log({ listfreinds: listfreinds });
    // 4. Filter friends whose birthdays fall within the next 7 days from 'today'
    var todayMonth = today.getMonth() + 1; // 0-based, so add 1
    var todayDay = today.getDate() + 7;
    var birthdaysToday = listfreinds.filter(function (friend) {
        var _a = friend.birthday.split('-').map(Number), year = _a[0], month = _a[1], day = _a[2];
        return month === todayMonth && day <= todayDay;
    });
    console.log({ birthdaysToday: birthdaysToday });
    // 5. Sort them by birthday date (MM-DD)
    // TBD
    return []; // placeholder
}
var today = new Date('2025-08-09');
getUpcomingBirthdays('u1', today);
