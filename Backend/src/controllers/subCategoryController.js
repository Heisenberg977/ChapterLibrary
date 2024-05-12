const SubCategory = require('../models/subcategory');
const Category = require('../models/category');

// Create a new sub-category
exports.createSubCategory = async (req, res) => {
  try {
    const { name, category } = req.body;
    const newSubCategory = new SubCategory({
      name,
      category,
    });
    await newSubCategory.save();
    res.status(201).json({ message: 'Sub-category created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating sub-category', error });
  }
};

// Get all sub-categories
exports.getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find().populate('category', 'name');
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ message: 'Error getting all sub-categories', error });
  }
};

// Get a single sub-category
exports.getSubCategory = async (req, res) => {
  try {
    const subCategoryId = req.params.id;
    const subCategory = await SubCategory.findById(subCategoryId).populate('category', 'name');
    if (!subCategory) {
      res.status(404).json({ message: 'Sub-category not found' });
    } else {
      res.status(200).json(subCategory);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error getting sub-category', error });
  }
};

// Update a sub-category
exports.updateSubCategory = async (req, res) => {
  try {
    const subCategoryId = req.params.id;
    const subCategory = await SubCategory.findById(subCategoryId);
    if (!subCategory) {
      res.status(404).json({ message: 'Sub-category not found' });
    } else {
      const { name, category } = req.body;
      subCategory.name = name;
      subCategory.category = category;
      await subCategory.save();
      res.status(200).json({ message: 'Sub-category updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating sub-category', error });
  }
};

// Delete a sub-category
exports.deleteSubCategory = async (req, res) => {
  try {
    const subCategoryId = req.params.id;
    await SubCategory.findByIdAndRemove(subCategoryId);
    res.status(200).json({ message: 'Sub-category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting sub-category', error });
  }
};