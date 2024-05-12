const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/librarw')
.then(()=>{
console.log('connected to DB');
})

.catch(()=>{
    console.log('unable to connected to DB');
})