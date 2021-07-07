const express = require('express');
const mongoose = require('mongoose');
const app = express();

const productRouter = require('./routes/productRouter');

const DB = "mongodb+srv://myrza:myrza123456@cluster0.zal1c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// пока, тура берсин осында, env ге салмай


mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => console.log(`MongoDB nooormal'nooo!!! `));

const port = 5000;


app.use(express.json());

app.use('/products', productRouter);


app.listen(port, () => {
  console.log(`Runnin on ${port}!!!`);
})