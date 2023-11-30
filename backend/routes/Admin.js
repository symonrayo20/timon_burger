const express = require("express");
const router = express.Router();
const useProductsService = require("../services/Products");
const { create, retrieve, update, delete: deleteProduct} = useProductsService();

router.get("/admin", async (req, res, next) => {
    try {
        const productsList = await retrieve();
        res.render("admin", {products: productsList});
        
    } catch (err) {
        console.log("GET /: ", err);
        res.status(500).json({status: "Retrieve Error"});
    }
}); 

module.exports = router;