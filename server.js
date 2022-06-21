require("dotenv").config();
const express = require("express");
require("./db/mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
// ROUTERS
const userRouter = require("./routers/userRoute");
const campingRouter = require("./routers/campignRoute");
const recurrringRouter = require("./routers/recurrringRoute");
const paymentRouter = require("./routers/paymentRoute");
//  END ROUTERS
const cors = require("cors");
const { use } = require("express/lib/router");
const { decode, encode } = require("base-64");
const app = express();
const PORT = process.env.PORT;
const origin = process.env.ORIGIN;
process.on("uncaughtException", function (err) {});
app.use(
  cors({
    credentials: true,
    origin: origin,
  })
);

app.use(express.json());
app.use(cookieParser());
// let full = encode("ePVAHN0toEMQdU2h2wi18ENqLjDohPAA:123456");
// console.log(full);

// Loading routes
app.use("/users", userRouter);
app.use("/users/get", userRouter);
app.use("/campaigns", campingRouter);
app.use("/recurring", recurrringRouter);
app.use("/payments", paymentRouter);

app.listen(PORT, () => {
  console.log(`Listen the port ${PORT}`);
});
