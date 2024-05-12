const express = require('express');
const router = express.Router();
const { createSubCategory, getAllSubCategories, getSubCategory, updateSubCategory, deleteSubCategory } = require('../controllers/subCategoryController');

// Create a new sub-category
router.post('/', createSubCategory);

// Get all sub-categories
router.get('/', getAllSubCategories);

// Get a single sub-category
router.get('/:id', getSubCategory);

// Update a sub-category
router.put('/:id', updateSubCategory);

// Delete a sub-category
router.delete('/:id', deleteSubCategory);

module.exports = router;