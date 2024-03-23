const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');

// const authRouter = require('./routes/authRouter');
// const adminRouter = require('./routes/admin');
// const userRouter = require('./routes/user');
const testRouter = require('./Routes/index');
const userRouter = require('./routes/user.router');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.use('/public', express.static(__dirname + '/public'));


app.use('/api', testRouter);
app.use('/api', userRouter);
// app.use('/api', authRouter);
// app.use('/api', adminRouter);
// app.use('/api', userRouter);

module.exports = app;
