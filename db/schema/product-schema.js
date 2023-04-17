const db = require("../connect");
const { Schema } = require("mongoose");

const productSchema = new Schema({
  productId: { type: Number, require: true },
  quantity: { type: Number, require: true },
  operation: { type: String, require: true },
});

const productModel = db.model("productDb", productSchema);
module.exports = productModel;
