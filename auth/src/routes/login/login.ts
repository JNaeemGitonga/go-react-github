import { Router } from 'express';
import BcryptUtilities from '../../utilities/bcrypt';

const router = Router();

router.post('/', (req, res) => {
    const hash = 'string'; //* should fetch from db and get the personby username
    const verified = BcryptUtilities.verifyPassword(req.body.password, hash);
    res.json(verified);
});

export default router;