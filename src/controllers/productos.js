const product = require ("../models/product")
module.exports = {
    index: (req, res) => res.render("products/list", {title: "Listado de productos", style: list, products: product.allWithExtra() }),
    show: (req, res) => res.render("products/detail", {title: "Detalles de producto", style: null }),
    create: (req, res) => res.render("products/create", {title: "Crear producto", style: null }),
    edit: (req, res) => res.render("products/edit", {title: "Edicion de producto", style: null }),
}