import AppError from '../utils/AppError.js';

/**
 * Request body validation middleware
 * @param {Array} fields - ['field1', 'field2'] required fields
 */
export const validateRequired = (...fields) => {
  return (req, res, next) => {
    const missing = fields.filter(f => !req.body[f] || String(req.body[f]).trim() === '');
    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missing.join(', ')}`,
      });
    }
    next();
  };
};
