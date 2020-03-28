import { Router } from 'express';
import { Request, Response } from 'express';
import { createToken, verifyToken } from '../../utilities/jwt';

const router = Router();

router.post('/', async (req: Request, res: Response): Promise<Response> => {
    try {
        verifyToken(req.cookies['REFRESH-TOKEN']);
    } catch(e) {
        res.sendStatus(401);
    }

    res.cookie('REFRESH-TOKEN', createToken({username: 'refresh token is good', expiresIn: '6h'}));
    res.cookie('XSRF-TOKEN', createToken({username: 'auth is good', expiresIn: '2h'}));

    return res.json({ msg: 'cookie is good' });
});

export default router;
