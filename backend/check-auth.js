const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/check-auth', async (req, res) => {
  try {
    // Assuming you are using a session or a JWT token for authentication
    const userId = req.session.userId || req.cookies.userId; // Example: retrieve from session or cookies
    if (!userId) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    res.json({ user: { id: user._id, username: user.username } });
  } catch (error) {
    console.error('Check auth error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
