require('dotenv').config();
const express = require('express');
require('./db/mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
const userRouter = require('./routers/userRoute');

const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
const origin = process.env.ORIGIN;
process.on('uncaughtException', function (err) {
  console.log(err);
});
app.use(
  cors({
    credentials: true,
    origin: origin,
  })
);

app.use(express.json());
app.use(cookieParser());

// Loading routes
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Listen the port ${PORT}`);
});
