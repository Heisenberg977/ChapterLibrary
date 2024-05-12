const Category = require('../models/category');

// Create a new category
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = new Category({
      name,
    });
    await newCategory.save();
    res.status(201).json({ message: 'Category created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating category', error });
  }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error getting all categories', error });
  }
};

// Get a single category
exports.getCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(200).json(category);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error getting category', error });
  }
};

// Update a category
exports.updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      const { name } = req.body;
      category.name = name;
      await category.save();
      res.status(200).json({ message: 'Category updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating category', error });
  }
};

// Delete a category
exports.deleteCategory = async (req, res)  => {
  try {
    const categoryId = req.params.id;
    await Category.findByIdAndRemove(categoryId);
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting category', error });
  }
};