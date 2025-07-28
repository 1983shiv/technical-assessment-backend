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
  const user = users.find((user) => user.id === userId)
  // 1. Find the user by ID
  // 2. Get the list of friend IDs
  const ListofFriends = user?.friends;
  // 3. Lookup those friends in the database
  const listfreinds = friends.filter((friend) => {
    return ListofFriends?.includes(friend.id)
  })
  console.log({listfreinds})
  // 4. Filter friends whose birthdays fall within the next 7 days from 'today'
  

  const todayMonth = today.getMonth() + 1; // 0-based, so add 1
  const todayDay = today.getDate() + 7 ;

  const birthdaysToday = listfreinds.filter(friend => {
    const [year, month, day] = friend.birthday.split('-').map(Number);
    return month === todayMonth && day <= todayDay;
  });
  console.log({birthdaysToday})
  // 5. Sort them by birthday date (MM-DD)

  // TBD

  return []; // placeholder
}

const today = new Date('2025-08-09');
getUpcomingBirthdays('u1', today);