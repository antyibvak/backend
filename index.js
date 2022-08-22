
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ItemRoute = require("./routes/item")
const OrderRoute = require("./routes/order")


dotenv.config();


mongoose.connect(
    process.env.MONGO_KEY
    ).then(() => ("success")
    ).catch((err) => {console.log(err);
    });

app.use("/api/items", ItemRoute);
app.use("/api/orders", OrderRoute);

app.listen(4000, ()=> {
    console.log("backend is active")
});