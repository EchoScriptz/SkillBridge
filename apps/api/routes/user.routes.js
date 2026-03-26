import { Router } from 'express';
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import { protect, authorize } from '../middleware/auth.middleware.js';

const router = Router();

router.use(protect); // All user routes require auth

router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', authorize('admin'), deleteUser);

export default router;
