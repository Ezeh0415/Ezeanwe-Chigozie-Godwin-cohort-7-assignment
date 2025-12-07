const express = require("express");
const router = express.Router();
const Require_Api_key = require("../Middleware/Api-key");
const Require_jwt_key = require("../Middleware/JWT-key");
const AuthSignup = require("../Controller/Auth/Signup");
const AuthLogin = require("../Controller/Auth/Login");
const { CreateItem } = require("../Controller/Products/CreateProduct");
const GetProduct = require("../Controller/Products/ReadProduct");
const UpdateProduct = require("../Controller/Products/UpdateProduct");
const DeleteProduct = require("../Controller/Products/DeleteProduct");

// Auth
router.post("/Signup", Require_Api_key, AuthSignup.Signup);
router.post("/Login", Require_Api_key, AuthLogin.Login);

// Product post
router.post("/AddProduct", Require_Api_key, Require_jwt_key, CreateItem);

// product get
router.get(
  "/GetProducts",
  Require_Api_key,
  Require_jwt_key,
  GetProduct.GetProducts
);
router.get(
  "/GetProducts/:id",
  Require_Api_key,
  Require_jwt_key,
  GetProduct.GetSingleProduct
);

// product update
router.put(
  "/UpdateProduct/:id",
  Require_Api_key,
  Require_jwt_key,
  UpdateProduct.SingleProductUpdate
);

// product delete
router.delete(
  "/DeleteProduct/:id",
  Require_Api_key,
  Require_jwt_key,
  DeleteProduct.DeleteSingleProduct
);
module.exports = router;
