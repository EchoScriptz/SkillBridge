import { Router } from 'express';
import { getItems, getItem, createItem, updateItem, deleteItem } from '../controllers/item.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { validateRequired } from '../middleware/validate.middleware.js';

const router = Router();

router.use(protect); // All item routes require auth

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', validateRequired('title'), createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;
