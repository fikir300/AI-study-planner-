const jwt = require('jsonwebtoken');

/**
 * Generates a signed JWT for a given user ID
 * @param {string} id - The MongoDB User ID
 * @returns {string} - Signed JWT token
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = { generateToken };