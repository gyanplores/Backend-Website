import { Router } from 'express';
import accountsRouter from './accountsRouter.js';

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

indexRouter.get('/signup', (req,res)=>{
    res.render("proto-signup", {
        title: "Signup Page"
    });
})

indexRouter.get('/login', (req,res)=>{
    res.render("proto-login", {
        title: "Login Page"
    });
})

indexRouter.use(accountsRouter);

export default indexRouter;