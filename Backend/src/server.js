const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const BookRouter = require('./routes/books');
const UserRouter = require('./routes/user');
const CategoryRouter = require('./routes/category');
const SubCategoryRouter = require('./routes/subcategory');
const FavoriteRouter = require('./routes/favourites');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api/books', BookRouter);
app.use('/api/users', UserRouter);
app.use('/api/categories', CategoryRouter);
app.use('/api/sub-categories', SubCategoryRouter);
app.use('/api/favorites', FavoriteRouter);

// Connect to MongoDB
mongoose.connect('mongodb+srv://omar:123456ss@library.nasqr2j.mongodb.net/?retryWrites=true&w=majority&appName=library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// create Document or Records for Book Models.
  
  // let cleanCodeBook = new bookModel({
  //   title: "Clean Code",
  //   author: "Robert C. Martin",
  //   bio: "A Handbook of Agile Software Craftsmanship was written by Robert C. Martin, often referred to as 'Uncle Bob' in the software development community. The book provides guidance and principles on writing clean, maintainable, and efficient code. It is a widely respected resource in the field of software development and is considered a classic in the industry",
  // }).save();
  
  // let grokkingAlgorithms = new bookModel({
  //   title: "Grokking Algorithms",
  //   author: "Aditya Bhargava",
  //   bio: "Grokking Algorithms by Aditya Bhargava is a beginner-friendly guide to understanding computer science algorithms. The book uses an approachable and visual style to explain complex concepts, making it accessible to readers with varying levels of programming experience. Through practical examples and illustrations, Bhargava covers a range of essential algorithms and data structures, including searching, sorting, graph algorithms, and dynamic programming. The book is designed for self-learners and those seeking a hands-on introduction to fundamental algorithms, making it a valuable resource for programmers looking to enhance their problem-solving skills and build a solid foundation in computer science.",
  // }).save();
  
  // let PYTHON = new bookModel({
  //     title: "python",
  //     author: "MOHAMED",
  //     bio: "Grokking Algorithms by Aditya Bhargava is a beginner-friendly guide to understanding computer science algorithms. The book uses an approachable and visual style to explain complex concepts, making it accessible to readers with varying levels of programming experience. Through practical examples and illustrations, Bhargava covers a range of essential algorithms and data structures, including searching, sorting, graph algorithms, and dynamic programming. The book is designed for self-learners and those seeking a hands-on introduction to fundamental algorithms, making it a valuable resource for programmers looking to enhance their problem-solving skills and build a solid foundation in computer science.",
  //   }).save();
  
  //   let introdactiontoalgorithms = new bookModel({
  //     title: "INTRODACTION TO ALGORITHMS",
  //     author: "HAZEM",
  //     bio: "Grokking Algorithms by Aditya Bhargava is a beginner-friendly guide to understanding computer science algorithms. The book uses an approachable and visual style to explain complex concepts, making it accessible to readers with varying levels of programming experience. Through practical examples and illustrations, Bhargava covers a range of essential algorithms and data structures, including searching, sorting, graph algorithms, and dynamic programming. The book is designed for self-learners and those seeking a hands-on introduction to fundamental algorithms, making it a valuable resource for programmers looking to enhance their problem-solving skills and build a solid foundation in computer science.",
  //   }).save();
  
  //   let JAVASCRIPT = new bookModel({
  //     title: "JAVASCRIPT",
  //     author: "Abdelsabour",
  //     bio: "Grokking Algorithms by Aditya Bhargava is a beginner-friendly guide to understanding computer science algorithms. The book uses an approachable and visual style to explain complex concepts, making it accessible to readers with varying levels of programming experience. Through practical examples and illustrations, Bhargava covers a range of essential algorithms and data structures, including searching, sorting, graph algorithms, and dynamic programming. The book is designed for self-learners and those seeking a hands-on introduction to fundamental algorithms, making it a valuable resource for programmers looking to enhance their problem-solving skills and build a solid foundation in computer science.",
  //   }).save();
  
  //   let HTML = new bookModel({
  //     title: "HTML",
  //     author: "ALSHORPAGY",
  //     bio: "Grokking Algorithms by Aditya Bhargava is a beginner-friendly guide to understanding computer science algorithms. The book uses an approachable and visual style to explain complex concepts, making it accessible to readers with varying levels of programming experience. Through practical examples and illustrations, Bhargava covers a range of essential algorithms and data structures, including searching, sorting, graph algorithms, and dynamic programming. The book is designed for self-learners and those seeking a hands-on introduction to fundamental algorithms, making it a valuable resource for programmers looking to enhance their problem-solving skills and build a solid foundation in computer science.",
  //   }).save();
  
  //   let SQL = new bookModel({
  //     title: "SQL",
  //     author: "JACK",
  //     bio: "Grokking Algorithms by Aditya Bhargava is a beginner-friendly guide to understanding computer science algorithms. The book uses an approachable and visual style to explain complex concepts, making it accessible to readers with varying levels of programming experience. Through practical examples and illustrations, Bhargava covers a range of essential algorithms and data structures, including searching, sorting, graph algorithms, and dynamic programming. The book is designed for self-learners and those seeking a hands-on introduction to fundamental algorithms, making it a valuable resource for programmers looking to enhance their problem-solving skills and build a solid foundation in computer science.",
  //   }).save();
  
  //   let DART = new bookModel({
  //     title: "DART",
  //     author: "Mahmoud Bakry",
  //     bio: "Grokking Algorithms by Aditya Bhargava is a beginner-friendly guide to understanding computer science algorithms. The book uses an approachable and visual style to explain complex concepts, making it accessible to readers with varying levels of programming experience. Through practical examples and illustrations, Bhargava covers a range of essential algorithms and data structures, including searching, sorting, graph algorithms, and dynamic programming. The book is designed for self-learners and those seeking a hands-on introduction to fundamental algorithms, making it a valuable resource for programmers looking to enhance their problem-solving skills and build a solid foundation in computer science.",
  //   }).save();
  
  //   let css = new bookModel({
  //     title: "css",
  //     author: "Aditya Bhargava",
  //     bio: "Grokking Algorithms by Aditya Bhargava is a beginner-friendly guide to understanding computer science algorithms. The book uses an approachable and visual style to explain complex concepts, making it accessible to readers with varying levels of programming experience. Through practical examples and illustrations, Bhargava covers a range of essential algorithms and data structures, including searching, sorting, graph algorithms, and dynamic programming. The book is designed for self-learners and those seeking a hands-on introduction to fundamental algorithms, making it a valuable resource for programmers looking to enhance their problem-solving skills and build a solid foundation in computer science.",
  //   }).save();
  
  