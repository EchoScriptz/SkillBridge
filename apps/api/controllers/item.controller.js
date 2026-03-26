import Item from '../models/Item.js';
import { sendSuccess, sendError, sendPaginated } from '../utils/response.js';

// GET /api/items
export const getItems = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Build filter
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.priority) filter.priority = req.query.priority;
    if (req.query.category) filter.category = req.query.category;
    if (req.query.search) {
      filter.$or = [
        { title: { $regex: req.query.search, $options: 'i' } },
        { description: { $regex: req.query.search, $options: 'i' } },
      ];
    }

    const total = await Item.countDocuments(filter);
    const items = await Item.find(filter)
      .populate('user', 'name email')
      .skip(skip)
      .limit(limit)
      .sort('-createdAt');

    sendPaginated(res, items, total, page, limit);
  } catch (error) {
    next(error);
  }
};

// GET /api/items/:id
export const getItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id).populate('user', 'name email');
    if (!item) return sendError(res, 'Item not found', 404);
    sendSuccess(res, item);
  } catch (error) {
    next(error);
  }
};

// POST /api/items
export const createItem = async (req, res, next) => {
  try {
    const item = await Item.create({
      ...req.body,
      user: req.user._id,
    });
    sendSuccess(res, item, 'Item created', 201);
  } catch (error) {
    next(error);
  }
};

// PUT /api/items/:id
export const updateItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return sendError(res, 'Item not found', 404);

    // Check ownership
    if (item.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return sendError(res, 'Not authorized to update this item', 403);
    }

    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    sendSuccess(res, updated, 'Item updated');
  } catch (error) {
    next(error);
  }
};

// DELETE /api/items/:id
export const deleteItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return sendError(res, 'Item not found', 404);

    if (item.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return sendError(res, 'Not authorized to delete this item', 403);
    }

    await Item.findByIdAndDelete(req.params.id);
    sendSuccess(res, null, 'Item deleted');
  } catch (error) {
    next(error);
  }
};
