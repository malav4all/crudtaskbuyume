const express = require("express");
const Routes = express.Router();
const {
  addPro,
  deleteProductHandler,
} = require("../controller/product-controller");

Routes.post("/addProduct", addPro);
Routes.delete("/:id", deleteProductHandler);

module.exports = Routes;
