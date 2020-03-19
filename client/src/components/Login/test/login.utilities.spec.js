import LoginUtilities from '../login.utilities';

describe('Utilities Test Suite', () => {

    test('Confirm password is Invalid', () => {
        expect(LoginUtilities.confirmPasswordIsInvalid('','')).toBe(true);
    });
    
    test('Confirm password is valid', () => {
        expect(LoginUtilities.confirmPasswordIsInvalid('test', 'test')).toBe(false);
    });

    test('Input is Invalid', () => {
        expect(LoginUtilities.isInputInvalid('username', 'test')).toBe(true);
    });

    test('Input is Valid', () => {
        expect(LoginUtilities.isInputInvalid('password', 'testing')).toBe(false);
    });

    test('Input is Invalid', () => {
        expect(LoginUtilities.isInputInvalid('password', '')).toBe(true);
    });
});