const express = require('express');
const router = express.Router();
const { addFavorite, removeFavorite } = require('../controllers/userController');

// Add a book to a user's favorites
router.post('/:userId/favorites/:bookId', addFavorite);

// Remove a book from a user's favorites
router.delete('/:userId/favorites/:bookId', removeFavorite);

module.exports = router;