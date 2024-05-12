const express = require('express');
const router = express.Router();
const { createCategory, getAllCategories, getCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');

// Create a new category
router.post('/', createCategory);

// Get all categories
router.get('/', getAllCategories);

// Get a single category
router.get('/:id', getCategory);

// Update a category
router.put('/:id', updateCategory);

// Delete a category
router.delete('/:id', deleteCategory);

module.exports = router;