const express = require('express');
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;  // Fallback to 3000 if not set in .env

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

db.once("open", () => {
    console.log("Connected to MongoDB");
});


db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});


app.get("/", (req, res) => {
    res.send('Hello world !!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
