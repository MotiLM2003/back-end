// const connection =
//   'mongodb+srv://moti:1234@cluster0.5l2ct.mongodb.net/data-center-2?retryWrites=true&w=majority';
const connection =
  'mongodb+srv://moti:moti2003@cluster0.6grtp.mongodb.net/world-of-tzedaka?retryWrites=true&w=majority';
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,

  autoIndex: true,
  keepAlive: true,

  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  family: 4, // Use IPv4, skip trying IPv6
};

mongoose.connect(
  connection,
  options,

  () => {
    console.log('connected to database, ');
  }
);
mongoose.connection.on('error', (err) => {
  console.log(err);
});
