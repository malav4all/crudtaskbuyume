const {
  addProduct,
  deleteProduct,
  fetchProduct,
} = require("../services/product-service");

const addPro = async (req, res) => {
  const body = req.body;
  try {
    const response = await addProduct(body);
    if (res.status === 200) {
      res.status(200).json({
        message: "Product Insert Sucessfully",
      });
    } else if (res.status === 500) {
      res.status(500).json({
        message: "Error in Inserting",
      });
    } else {
      res.status(401).json({
        message: "Something Went Wrong",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteProductHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const resposnse = await deleteProduct(id);
    if (res.status === 200) {
      res.status(200).json({
        message: "Delete Successfully",
      });
    } else if (res.status === 500) {
      res.status(500).json({
        message: "Error in Delete Successfully",
      });
    } else {
      res.status(401).json({
        message: "Something Went Wrong",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addPro, deleteProductHandler };
