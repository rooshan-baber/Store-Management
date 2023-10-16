const express = require("express");
const cors = require("cors");
const routes = require("../routes/routes");
const sequelize = require("../db/config/config");
const User = require('../db/models/user');
const Product = require('../db/models/products');
const Category = require('../db/models/category');

const PORT = 3000;
const app = express();
//MIDDLEWARES
app.use(cors());
app.use("/", routes);
//MONGO DATABASE CONNECTION
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });

// Database Configuration
sequelize
  .sync()
  .then(() => {
    console.log("Database Synced.");
  })
  .catch((err) => {
    console.log("Error Syncing Database\n error: ", err.message);
  });
// Table Creation in Synced Database
// User.sync({alter:true}).then(() =>{
//   console.log("Table / Model added to the Synced Database.");
// }).catch((err) =>{
//   console.log("Table / Model couldn't be added to the Synced Database.\nerror: ",err.message);
// });

// Category.sync({alter:true}).then(() =>{
//   console.log("Category Table / Model added to the Synced Database.");
// }).catch((err) =>{
//   console.log("Category Table / Model couldn't be added to the Synced Database.\nerror: ",err.message);
// });

// Product.sync({alter:true}).then(() =>{
//   console.log("Product Table / Model added to the Synced Database.");
// }).catch((err) =>{
//   console.log("Product Table / Model couldn't be added to the Synced Database.\nerror: ",err.message);
// });

Category.hasMany(Product, { foreignKey: 'Pcat', sourceKey: 'Ccode', as: 'productCategory' });
Product.belongsTo(Category, { foreignKey: 'Pcat', targetKey: 'Ccode', as: 'productCategory' });

//SERVER
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
