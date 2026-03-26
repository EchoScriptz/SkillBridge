/**
 * Form validation helpers
 * Usage: const errors = validate(formData, rules)
 */

export const isEmail = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

export const isRequired = (value) => {
  return value !== undefined && value !== null && String(value).trim() !== '';
};

export const minLength = (value, min) => {
  return String(value).length >= min;
};

export const maxLength = (value, max) => {
  return String(value).length <= max;
};

export const isNumber = (value) => {
  return !isNaN(Number(value));
};

export const isPhone = (value) => {
  return /^[+]?[\d\s-]{10,15}$/.test(value);
};

/**
 * Validate form data against rules
 * @param {Object} data - Form data
 * @param {Object} rules - Validation rules { fieldName: [{ check, message }] }
 * @returns {Object} errors - { fieldName: 'error message' }
 * 
 * Example:
 * const rules = {
 *   email: [
 *     { check: v => isRequired(v), message: 'Email is required' },
 *     { check: v => isEmail(v), message: 'Invalid email' },
 *   ],
 *   password: [
 *     { check: v => isRequired(v), message: 'Password is required' },
 *     { check: v => minLength(v, 6), message: 'Min 6 characters' },
 *   ],
 * };
 */
export const validate = (data, rules) => {
  const errors = {};
  for (const [field, checks] of Object.entries(rules)) {
    for (const { check, message } of checks) {
      if (!check(data[field])) {
        errors[field] = message;
        break;
      }
    }
  }
  return errors;
};

export const hasErrors = (errors) => Object.keys(errors).length > 0;
