const express = require('express');

// Create router instance
const router = express.Router();

// GET /api/v1/posts
router.get('/', (req, res) => {
    res.send('Fetching all blog posts from modular router!');
});

// POST /api/v1/posts
router.post('/', (req, res) => {
    res.send('Creating a new blog post...');
});

// Export router
module.exports = router;
