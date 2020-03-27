import bcrypt from 'bcrypt';

export default class BcryptUtilities {
    private static saltRounds = 10;

    public static  generatePassword = (password: string): string => {
        return bcrypt.hashSync(password, BcryptUtilities.saltRounds);
    }

    public static verifyPassword = (plaintextPassword: string, hash: string): boolean => {
        return bcrypt.compareSync(plaintextPassword, hash);
    }
}
