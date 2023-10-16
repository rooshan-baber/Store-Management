const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const SK = "qwertyuiopasdfghjklzxcvbnmqwerty";
const User = require("../db/models/user");
const Product = require("../db/models/products");
const Category = require("../db/models/category");
const { where } = require("sequelize");

//MIDDLEWARES
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTES

// CREATE USER
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user in the database
    user = await User.create({
      username,
      email,
      password
    });
 
    res.json({message: "Successfully Registered", status: 200})
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: error.message });
  }
});

//FIND USER
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      const token = jwt.sign(
        {email: user.email, username: user.username },
        SK
      );
      await User.update({ token }, { where: { email } });
      user.token = token;
      res.send(user);
    } else {
      console.log('Incorrect email or password');
      res.status(401).send('Incorrect email or password');
      res.redirect("/login");
    }
  } catch (error) {
    console.error('Error Finding User: ', error);
    res.status(500).json({ error: error.message });
    res.redirect("/login");
  }
});

//Create new Product
app.post("/product", async (req, res) => {
  try {
    const { Pcode, Pname, Pprice, Pcat } = req.body;

    // Find the category based on the provided Cname
    const category = await Category.findOne({
      where: {
        Cname: Pcat
      }
    });

    if (!category) {
      return res.status(400).json("Category not found");
    }
    // Create a new product and associate it with the found category
    await Product.create({
      Pcode,
      Pname,
      Pprice,
      Pcat: category.Ccode // Associate with the category's Ccode
    });

    res.status(200).json("New Product Created");
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: error.message });
  }
});


//Create new Category
app.post("/category", async (req, res) => {
  try {
    const {Ccode,Cname,} = req.body;
    // Create a new product in the database
    await Category.create({
      Ccode,
      Cname
    });
    res.status(200).json("New Category Created");
    } catch (error) {
      console.error("Error creating category:", error);
      res.status(500).json({ error: error.message });
    }
});

//Find All Products
app.get("/showproducts", async (req, res) => {
  try {
    const allProducts = await Product.findAll({
      include: {
        model: Category,
        attributes: ['Cname'],
        as: 'productCategory'
      }
    });
    res.send(allProducts);
  } catch (error) {
    console.error("Error Finding Products:", error);
    res.status(500).json({ error: error.message });
  }
});

//Find All Products of particular category
app.post("/showproductss", async (req, res) => {
  try {
    const cat = await Category.findOne({where:{Cname : req.body.category}})
    const allProducts = await Product.findAll({where:{Pcat : cat.Ccode}}
    );
    res.send(allProducts);
  } catch (error) {
    console.error("Error Finding Products:", error);
    res.status(500).json({ error: error.message });
  }
});


//Find All Category
app.get("/showcategory", async (req, res) => {
  try {
    const allcategory = await Category.findAll();
    res.send(allcategory);
  } catch (error) {
    console.error("Error Finding Products:", error);
    res.status(500).json({ error: error.message });
  }
});

//Find Product where
app.post("/oneproduct", async (req, res) => {
  try {
    const pro = await Product.findOne({where:{Pname : req.body.Pname}});
    res.send(pro);
  } catch (error) {
    console.error("Error Finding Products:", error);
    res.status(500).json({ error: error.message });
  }
});
//Update User in table
app.put("/edit", async (req, res) => {
  try {
    //Update Pname,Pprice and Pcat of given Pid
    const {Pcode,Pname,Pprice,Pcat} = req.body;
    const category = await Category.findOne({where: {Cname : Pcat}});
    if (!category) {
      return res.status(400).json("Category not found");
    }

    const updateproduct = await Product.update(
      {
        Pcode : Pcode,
        Pname : Pname,
        Pprice : Pprice,
        Pcat : category.Ccode
      },
      { where: { Pcode : Pcode } }
    );
    res.status(201).json(updateproduct);
  } catch (error) {
    console.error("Error Updating Product: ", error);
    res.status(500).json({ error: error.message });
  }
});
//Delete User from table
app.post("/delete", async (req, res) => {
  try {
    const { Pname } = req.body;
    await Product.destroy({ where:{ Pname : Pname } });
    res.status(201).json("Product Deleted Successfully");
  } catch (error) {
    console.error("Error Deleting User: ", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;
