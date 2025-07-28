import { getUpcomingBirthdays } from '../birthdayReminder';
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
