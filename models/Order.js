const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    ItemName: { type: String, required: true },
    items: [
      {
        ItemId: {
          type: Number,
          required: true
        },
        quantity: {
          type: Number,
          required: true
        },
        price: {
          type: Number,
          required: true
        }
      },
    ],
    TotalPrice: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
);

module.exports = mongoose.model("Order", OrderSchema);