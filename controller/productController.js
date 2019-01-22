var Product = require("../models/product.js");

exports.generateProduct = function (req, res) {
    res.render("admin/product/form.ejs");
};

exports.saveProduct = function (req, res) {
    var product = new Product({
                name: req.body.name,
                thumbnail: req.body.thumbnail,
                price: req.body.price,
                description: req.body.description,

            });
    product.save();
    res.send("Lưu sản phẩm thành công !");
};

exports.listProduct = function (req, res) {
    Product.find({}, function(err, products) {
        res.render("admin/product/list.ejs", {
            "listProduct": products
        });
    });
};