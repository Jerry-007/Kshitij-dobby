if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require('cors')
const passport = require('passport')
const routes = require("./routes/api/images");
const user = require('./routes/api/user');
var path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(session({ secret: "thesecret",resave:false,saveUninitialized:true }));

app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 8000;
const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/api/users", user);  
app.use("/api/images", routes);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname,'client/build/index.html'));
  });
}

app.listen(port, () => console.log(`server started on port ${port}`));
