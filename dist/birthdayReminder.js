console.log("Testing file - shiv");
// 🟩 MOCK DATABASE
const users = [
    { id: 'u1', name: 'Alice', friends: ['u2', 'u3'] },
    { id: 'u2', name: 'Bob', friends: ['u1'] },
    { id: 'u3', name: 'Charlie', friends: ['u1'] },
];
const friends = [
    { id: 'u2', name: 'Bob', birthday: '1990-08-02' },
    { id: 'u3', name: 'Charlie', birthday: '1990-08-10' },
];
// 🟦 FUNCTION TO COMPLETE
export function getUpcomingBirthdays(userId, today) {
    // ✅ TODO:
    const user = users.find((user) => user.id === userId);
    // 1. Find the user by ID
    // 2. Get the list of friend IDs
    const ListofFriends = user === null || user === void 0 ? void 0 : user.friends;
    // 3. Lookup those friends in the database
    const listfreinds = friends.map((friend) => {
        return ListofFriends === null || ListofFriends === void 0 ? void 0 : ListofFriends.includes(friend.id);
    });
    console.log({ listfreinds });
    // 4. Filter friends whose birthdays fall within the next 7 days from 'today'
    // 5. Sort them by birthday date (MM-DD)
    // TBD
    return []; // placeholder
}
