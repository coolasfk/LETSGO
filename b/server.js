const User = require("./models/User");
const express = require("express");
const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

// require("dotenv").config();
mongoose.connect(
  // process.env.MONGOURI,

  `mongodb+srv://LETSGO:b5pgmJwSQVpE1fkv@letsgo.w5jvdwy.mongodb.net/LETSGO?retryWrites=true&w=majority`,

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
// .then((db) => console.log("db connections", db.connections[0]));

// const port = process.env.PORT;
const port = 443;

app.get("/users", (req, res) => {
  User.find({}).then((result) => {
    console.log("result from Get", result);
    res.status(200).json(result);
  });
});

// app.get("/users", (req, res) => {});

app.post("/users", (req, res) => {
  console.log("log post before", req.body);
  User.create(req.body).then((result) => {
    console.log("result from POST", result);
    res.status(200).json(result);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
