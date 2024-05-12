const Book = require('../models/bookModel');


// Create a new book
exports.createBook = async (req, res) => {
  try {
    const { title, author, category, subCategory, description, coverImage } = req.body;
    const newBook = new Book({
      title,
      author,
      category,
      subCategory,
      description,
      coverImage,
    });
    await newBook.save();
    res.status(201).json({ message: 'Book created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error });
  }
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('category', 'name').populate('subCategory', 'name');
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error getting all books', error });
  }
};

// Get a single book
exports.getBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId).populate('category', 'name').populate('subCategory', 'name');
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      res.status(200).json(book);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error getting book', error });
  }
};

// Update a book
exports.updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      const { title, author, category, subCategory, description, coverImage } = req.body;
      book.title = title;
      book.author = author;
      book.category = category;
      book.subCategory = subCategory;
      book.description = description;
      book.coverImage = coverImage;
      await book.save();
      res.status(200).json({ message: 'Book updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    await Book.findByIdAndRemove(bookId);
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
};