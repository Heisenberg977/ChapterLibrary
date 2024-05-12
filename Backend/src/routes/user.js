const express = require('express');
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  addFavorite,
  removeFavorite,
} = require('../controllers/userController');

// Create a new user
router.post('/', createUser);

// Get all users
router.get('/', getAllUsers);

// Get a single user
router.get('/:id', getUser);

// Update a user
router.put('/:id', updateUser);

// Delete a user
router.delete('/:id', deleteUser);

// Add a book to a user's favorites
router.post('/:userId/favorites/:bookId', addFavorite);

// Remove a book from a user's favorites
router.delete('/:userId/favorites/:bookId', removeFavorite);

module.exports = router;