const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 4000;

// Connection to the database
mongoose.connect(process.env.DATABASE_CONNECT,
{useNewUrlParser:true,useUnifiedTopology:true},
()=>console.log('connected to database'));

app.use('/api/user',authRouter);

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));