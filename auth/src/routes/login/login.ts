import { Router } from 'express';
import BcryptUtilities from '../../utilities/bcrypt';
import { Request, Response } from '../../utilities/request';

const router = Router();

router.post('/', async (req: Request, res: Response): Promise<void> => {
    const hash = 'string'; //* should fetch from db and get the personby username
    const verified = await BcryptUtilities.verifyPassword(req.body.password, hash);
    res.json({ verified });
});

export default router;