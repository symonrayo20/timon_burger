const express = require("express");
const router = express.Router();
const useProductsService = require("../services/Products");
const { create, retrieve, update, delete: deleteProduct} = useProductsService();

router.get("/", async (req, res, next) => {
    try {
        const productsList = await retrieve();
        res.render("index", {products: productsList});
        
    } catch (err) {
        console.log("GET /: ", err);
        res.status(500).json({status: "Retrieve Error"});
    }

});

router.post("/products", async (req, res, next) => {
    const { name, price } = req.body;
    try {
        const isCreated = await create({ name, price });

        if (isCreated) {
            res.status(200).json({message: "successfully created", data: isCreated});
        } else {
            res.status(500).json({message: "Failed Create", data: isCreated})
        }

    } catch (err) {
        console.log("POST /products: ", err);
        res.status(500).json({status: "Create Error"});
    }
})

router.put("/products", async (req, res, next) => {
    const { id, name, price } = req.body;
    try {
        const isUpdated = await update({ id, name, price });

        if (isUpdated) {
            res.status(200).json({message: "successfully Updated", data: isUpdated});
        } else {
            res.status(500).json({message: "Failed Update", data: isUpdated})
        }

    } catch (err) {
        console.log("PUT /: ", err);
        res.status(500).json({status: "Update Error"});
    }
})

router.delete("/admin", async (req, res, next) => {
    const { id } = req.body;
    try {
        const isDeleted = await deleteProduct(id);

        if (isDeleted) {
            res.status(200).json({message: "successfully Deleted", data: isDeleted});
        } else {
            res.status(500).json({message: "Failed Delete", data: isDeleted})
        }

    } catch (err) {
        console.log("PUT /: ", err);
        res.status(500).json({status: "Delete Error"});
    }
})

module.exports = router;