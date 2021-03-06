const express = require("express");
const bodyParser = require("body-parser");


const productsRoutes = require("./routes/products.routes");
const userRoutes = require("./routes/user.routes");
const categoryRoutes = require("./routes/category.routes");
const orderRoutes = require("./routes/order.routes");
const cartRoutes = require("./routes/cart.routes");

var app = express();

  // parse requests of content-type: application/json
app.use(bodyParser.json());

  // parse requests of content-type: application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
    
  // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Welcome." });

  });

//app.use(prod);
app.use('/api',productsRoutes);
app.use('/api',userRoutes);
app.use('/api',categoryRoutes);
app.use('/api',orderRoutes);
app.use('/api',cartRoutes);


app.listen(3000, () => {
    console.log('Server is running at port 3000');
    });

   module.exports = app; 
    



