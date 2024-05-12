const User = require('../models/users');
const Book = require('../models/bookModel');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({
      username,
      email,
      password,
    });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error getting all users', error });
  }
};

// Get a single user
exports.getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error getting user', error });
  }
};


// Update a user
exports.updateUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        const { username, email, password } = req.body;
        user.username = username;
        user.email = email;
        user.password = password;
        await user.save();
        res.status(200).json({ message: 'User updated successfully' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating user', error });
    }
  };
  
  // Delete a user
  exports.deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      await User.findByIdAndRemove(userId);
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user', error });
    }
  };
  
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