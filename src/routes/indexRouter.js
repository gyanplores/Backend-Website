import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('/', (req,res) => {
    res.render("index", {
        title: "Index Page"
    });
})

indexRouter.get('/about', (req,res) => {
    res.render("about", {
        title: "About Page"
    });
})

indexRouter.get('/contact', (req,res) => {
    res.render("contact", {
        title: "Contacts Page"
    });
})

indexRouter.get('/product-details', (req,res) => {
    res.render("product-details", {
        title: "Product Details Page"
    });
})

indexRouter.get('/products', (req,res) => {
    res.render("products", {
        title: "Products Page"
    });
})

export default indexRouter;