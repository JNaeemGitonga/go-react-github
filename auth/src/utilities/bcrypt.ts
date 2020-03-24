import bcrypt from 'bcrypt';

export default class BcryptUtilities {
    private static saltRounds = 10;

    public static  generatePassword = (password: string): Promise<string> => {
        return bcrypt.hash(password, BcryptUtilities.saltRounds);
    }

    public static verifyPassword = (plaintextPassword: string, hash: string): Promise<boolean> => {
        return bcrypt.compare(plaintextPassword, hash);
    }
}
