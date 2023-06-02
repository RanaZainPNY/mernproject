// getting-started.js
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 5000;
const userRouter = require("./controllers/user.controller");
const cors = require('cors');
const productRouter = require("./controllers/product.controller");


// Database Connectivity
// conectionString = "mongodb://127.0.0.1:27017/Antiques";
conectionString = "mongodb+srv://mongo:mongo@cluster0.xrwpv5u.mongodb.net/Antiques";
try{
    mongoose
    .connect(conectionString)
    .then(() => console.log("DB Connected"))
    .catch((e) => console.log(e));
}catch(error){
    console.log("Error Connecting to Database")
}
// App Use express json for
app.use(express.json());

// Use the cors middleware
app.use(cors());

// Routes Settings
app.get("/", (req, res) => {
  res.send("Hello World");  
});


// towards controller
app.use("/user", userRouter);
app.use("/product", productRouter)

app.listen(port, () => console.log(`Server is running on Port: ${port}`));
