import jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT__SECRET;

export const getToken = (data): string => {
    return  jwt.sign(data, jwtSecret, { expiresIn: '1h' });
}
