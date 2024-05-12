const Favorite = require('../models/favourite');
const User = require('../models/user');
const Book = require('../models/book');

// Add a book to a user's favorites
exports.addFavorite = async (req, res) => {
  try {
    const userId = req.params.userId;
    const bookId = req.params.bookId;
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      const book = await Book.findById(bookId);
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
      } else {
        user.favorites.push(book);
        await user.save();
        res.status(200).json({ message: 'Book added to favorites successfully' });
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Error adding book to favorites', error });
  }
};

// Remove a book from a user's favorites
exports.removeFavorite = async (req, res) => {
  try {
    const userId = req.params.userId;
    const bookId = req.params.bookId;
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      const index = user.favorites.indexOf(bookId);
      if (index > -1) {
        user.favorites.splice(index, 1);
        await user.save();
        res.status(200).json({ message: 'Book removed from favorites successfully' });
      } else {
        res.status(404).json({ message: 'Book not found in favorites' });
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Error removing book from favorites', error });
  }
};