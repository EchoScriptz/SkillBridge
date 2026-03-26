import { Router } from 'express';
import { signup, login, getMe } from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { validateRequired } from '../middleware/validate.middleware.js';

const router = Router();

router.post('/signup', validateRequired('name', 'email', 'password'), signup);
router.post('/login', validateRequired('email', 'password'), login);
router.get('/me', protect, getMe);

export default router;
