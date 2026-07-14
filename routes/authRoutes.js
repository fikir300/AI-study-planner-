const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware'); // Or wherever your protect middleware is located

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Private route (requires token)
router.get('/profile', protect, getUserProfile);

module.exports = router;