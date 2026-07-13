// test/combineUsers.test.js
const { combineUsers } = require('../index.js');

describe('combineUsers', () => {
    test('should return an object', () => {
        const result = combineUsers(['a'], ['b']);
        expect(typeof result).toBe('object');
    });

    test('should have users and merge_date properties', () => {
        const result = combineUsers(['a'], ['b']);
        expect(result).toHaveProperty('users');
        expect(result).toHaveProperty('merge_date');
    });

    test('should merge all given arrays', () => {
        const result = combineUsers(['a', 'b'], ['c', 'd'], ['e']);
        expect(result.users).toEqual(['a', 'b', 'c', 'd', 'e']);
    });

    test('should contain today\'s date', () => {
        const result = combineUsers(['a'], ['b']);
        const today = new Date().toDateString();
        expect(result.merge_date).toBe(today);
    });
});