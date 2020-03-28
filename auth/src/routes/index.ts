import loginRoute from './login/login';
import signupRoute from './signup/signup';
import refreshRoute from './refresh/refresh';

import { Router } from 'express';

const router = Router();

router.use('/api/auth/login', loginRoute)
router.use('/api/auth/signup', signupRoute);
router.use('/api/auth/refresh', refreshRoute);

export default router;