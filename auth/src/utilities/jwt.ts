import jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT__SECRET;


interface tokenData {
    expiresIn: string;
    username?: string;
}

export const createToken = (tokenData: tokenData): string => {
    const expiresIn = tokenData.expiresIn;
    delete tokenData.expiresIn;
    return  jwt.sign(tokenData, jwtSecret, { expiresIn });
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, jwtSecret);
}