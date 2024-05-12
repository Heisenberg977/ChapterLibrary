const express = require('express');
const router = express.Router();
const { createBook, getAllBooks, getBook, updateBook, deleteBook } = require('../controllers/bookController');

// Create a new book
router.post('/', createBook);

// Get all books
router.get('/', getAllBooks);

// Get a single book
router.get('/:id', getBook);

// Update a book
router.put('/:id', updateBook);

// Delete a book
router.delete('/:id', deleteBook);

module.exports = router;