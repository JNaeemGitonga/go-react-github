import Utilities from '../utilities';

describe('Utilities Test Suite', () => {

    test('Confirm password is Invalid', () => {
        expect(Utilities.confirmPasswordIsInvalid('','')).toBe(true);
    });
    
    test('Confirm password is valid', () => {
        expect(Utilities.confirmPasswordIsInvalid('test', 'test')).toBe(false);
    });

    test('Input is Invalid', () => {
        expect(Utilities.isInputInvalid('username', 'test')).toBe(true);
    });

    test('Input is Valid', () => {
        expect(Utilities.isInputInvalid('password', 'testing')).toBe(false);
    });

    test('Input is Invalid', () => {
        expect(Utilities.isInputInvalid('password', '')).toBe(true);
    });
});