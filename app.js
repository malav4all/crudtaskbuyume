const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/", require("./route/product-route"));
app.listen(6000, () => {
  console.log("Server is Starting", 6000);
});
