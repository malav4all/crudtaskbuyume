const productModel = require("../db/schema/product-schema");

const addProduct = async (productObject) => {
  const res = await productModel.insertMany(productObject);
  return res;
};

const deleteProduct = async (id) => {
  const res = await productModel.findByIdAndDelete(id);
  return res;
};

const fetchProduct = async () => {
  const res = await productModel.find();
  return res;
};

module.exports = { addProduct, deleteProduct, fetchProduct };
