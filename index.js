const express = require('express');
const app = express();

// Importing routes
const authRoute = require('./routes/authoWrapper');

// Middleware
app.use('/api/users',authRoute);

app.listen(5000,()=>console.log('Server is running at port number 5000'));