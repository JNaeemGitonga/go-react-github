import { Router } from 'express';
import { Request, Response } from 'express';
import BcryptUtilities from '../../utilities/bcrypt';
import  connectToDb from '../../utilities/mongo/mongo';
import DbActions from '../../utilities/mongo/db-actions';
import { IUser } from '../../models/user';
import { createToken } from '../../utilities/jwt';

const router = Router();

router.post('/', async (req: Request, res: Response): Promise<Response> => {
    const db = await connectToDb();
    const dbActions = new DbActions<IUser>(db, 'users');
    const user = await dbActions.findOne({ username: req.body.username });
    if (!user) return res.sendStatus(404);

    const verified = BcryptUtilities.verifyPassword(req.body.password, user.password);
    if (!verified) return res.sendStatus(401);

    return res.cookie('AUTH-TOKEN', createToken({ username: user.username, expiresIn: '2h' })).json({ verified });
});

export default router;
