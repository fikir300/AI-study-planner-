const bcrypt = require('bcryptjs');

/**
 * Hash a plain text password
 * @param {string} password 
 * @returns {Promise<string>} hashed password
 */
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

/**
 * Compare plain password with database hash
 * @param {string} enteredPassword 
 * @param {string} hashedPassword 
 * @returns {Promise<boolean>} match status
 */
const comparePassword = async (enteredPassword, hashedPassword) => {
  return await bcrypt.compare(enteredPassword, hashedPassword);
};

module.exports = { hashPassword, comparePassword };