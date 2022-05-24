require('dotenv').config();
const express = require('express');
require('./db/mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
// ROUTERS
const userRouter = require('./routers/userRoute');
const campingRouter = require('./routers/campignRoute');
//  END ROUTERS
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
const origin = process.env.ORIGIN;
process.on('uncaughtException', function (err) {});
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
app.use('/users/get', userRouter);
app.use('/campaigns', campingRouter);

app.listen(PORT, () => {
  console.log(`Listen the port ${PORT}`);
});
