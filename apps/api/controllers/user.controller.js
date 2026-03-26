import User from '../models/User.js';
import { sendSuccess, sendError, sendPaginated } from '../utils/response.js';

// GET /api/users
export const getUsers = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await User.countDocuments();
    const users = await User.find().skip(skip).limit(limit).sort('-createdAt');

    sendPaginated(res, users, total, page, limit);
  } catch (error) {
    next(error);
  }
};

// GET /api/users/:id
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return sendError(res, 'User not found', 404);
    sendSuccess(res, user);
  } catch (error) {
    next(error);
  }
};

// PUT /api/users/:id
export const updateUser = async (req, res, next) => {
  try {
    const { name, email, role } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, role },
      { new: true, runValidators: true }
    );
    if (!user) return sendError(res, 'User not found', 404);
    sendSuccess(res, user, 'User updated');
  } catch (error) {
    next(error);
  }
};

// DELETE /api/users/:id
export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return sendError(res, 'User not found', 404);
    sendSuccess(res, null, 'User deleted');
  } catch (error) {
    next(error);
  }
};
