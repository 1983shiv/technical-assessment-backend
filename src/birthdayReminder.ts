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
  { id: 'u4', name: 'Daisy', friends: ['u2, u5'] },
  { id: 'u5', name: 'Eva', friends: ['u4'] },
];

const friends: Friend[] = [
  { id: 'u1', name: 'Alice', birthday: '1990-08-01' },
  { id: 'u2', name: 'Bob', birthday: '1990-08-02' },
  { id: 'u3', name: 'Charlie', birthday: '1990-08-06' },
  { id: 'u4', name: 'Daisy', birthday: '1990-08-13' },
  { id: 'u5', name: 'Eva', birthday: '1990-08-16' }
];

// 🟦 FUNCTION TO COMPLETE
export function getUpcomingBirthdays(userId: string, today: Date): Friend[] {
  // ✅ TODO:
  // 1. Find the user by ID
  const user = users.find((user) => user.id === userId)
  
  // 2. Get the list of friend IDs
  const userAllFriends = user?.friends;

  // 3. Lookup those friends in the database
  const filteredFriends = friends.filter((friend) => {
    return userAllFriends?.includes(friend.id)
  })
  // console.log({filteredFriends})
  
  // 4. Filter friends whose birthdays fall within the next 7 days from 'today'
  const next7Days = new Date(today);
  next7Days.setDate(today.getDate() + 7);

  const upcomingBirthdays = filteredFriends.filter(friend => {
    const [year, month, day] = friend.birthday.split('-').map(Number);
    const birthdayThisYear = new Date(today.getFullYear(), month - 1, day);
    return birthdayThisYear >= today && birthdayThisYear <= next7Days;
  });
  // console.log({upcomingBirthdays})
  // 5. Sort them by birthday date (MM-DD)
  const sortedUpcomingBirthdays = upcomingBirthdays.sort((a,b) => {
    return new Date(a.birthday).getTime() - new Date(b.birthday).getTime()
  })
  // TBD

  return sortedUpcomingBirthdays; // placeholder
}

// const today = new Date('2025-08-04');
// getUpcomingBirthdays('u1', today);