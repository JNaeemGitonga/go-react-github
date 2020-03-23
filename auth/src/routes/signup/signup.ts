import { Router } from 'express';

const router = Router();

router.post('/', (_, res) => {
    res.json('I got signed up!')
});

export default router;