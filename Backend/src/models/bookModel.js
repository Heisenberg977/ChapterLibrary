const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, ref: 'Category', required: true },
  subCategory: { type: String, ref: 'SubCategory', required: true },
  description: { type: String, required: true },
  coverImage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', BookSchema);