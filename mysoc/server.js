//All dependencies
const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");

//Mongoose connect
mongoose.connect("mongodb://127.0.0.1:27017/mysocuser");

//Adding paths of external files
const User = require("./models/User.js");
const Chairman = require("./models/Chairman.js");

app.use(bodyParser.json());
app.use(cors());

const hashPassword = async (pw) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(pw, salt);
  return hash;
};

//Getting data route
app.post("/api/register/user", async (req, res) => {
  const { name, username, password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = new User({ name, username, password: hashedPassword });
    await newUser.save();

    return res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

// Chairman registration route
app.post("/api/register/chairman", async (req, res) => {
  const { name, username, password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);

    const existingChairman = await Chairman.findOne({ username });
    if (existingChairman) {
      return res.status(400).json({ error: "Chairman already exists" });
    }

    const newChairman = new Chairman({
      name,
      username,
      password: hashedPassword,
    });
    await newChairman.save();

    return res
      .status(200)
      .json({ message: "Chairman registration successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

// User login route
app.post("/api/login/user", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Add any additional logic you need for user login

    return res.status(200).json({ message: "User login successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

// Chairman login route
app.post("/api/login/chairman", async (req, res) => {
  const { username, password } = req.body;

  try {
    const chairman = await Chairman.findOne({ username });
    if (!chairman) {
      return res.status(404).json({ error: "Chairman not found" });
    }

    const passwordMatch = await bcrypt.compare(password, chairman.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Add any additional logic you need for chairman login

    return res.status(200).json({ message: "Chairman login successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

//Starting server
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
