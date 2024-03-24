const express = require("express");


const cors = require('cors');
const bodyParser = require('body-parser');

const cartRouter = require('./routes/cart.route');
const oderRouter = require('./routes/order.route');
const productRouter = require('./routes/product.router');
const productTypeRouter = require('./routes/productType.route');
const userRouter = require('./routes/user.route');


const cartRouter = require("./routes/cart.route");
const infoRouter = require("./routes/info.route");
const oderRouter = require("./routes/order.route");
const productRouter = require("./routes/product.router");
const productTypeRouter = require("./routes/productType.route");
const registerRouter = require("./routes/register.route");

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use("/api", cartRouter);
app.use("/api", infoRouter);
app.use("/api", oderRouter);
app.use("/api", productRouter);
app.use("/api", productTypeRouter);
app.use("/api", registerRouter);


// app.use('/public', express.static(__dirname + '/public'));

module.exports = app;
