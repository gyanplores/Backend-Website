import "dotenv/config";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import express from 'express';
import exphbs from 'express-handlebars';
import indexRouter from "./src/routes/indexRouter.js";
import { connectToMongo } from "./src/models/conn.js";

async function main() {
    const __dirname = dirname( fileURLToPath(import.meta.url) );
    const app = express();

    app.use("/static", express.static(__dirname + "/public"));

    app.use(express.static('./public'));

    app.engine('hbs', exphbs.engine({extname: 'hbs'}));
    app.set("view engine", "hbs");
    app.set("views", "./views");
    app.set("view cache", false);
    
    app.use(express.json());
    app.use(indexRouter);

    try {
        await connectToMongo();
        console.log("Connected to MongoDB");
        app.listen(process.env.SERVER_PORT, () => {
            console.log("Express app now listening...");
        });
    }catch (err) {
        console.error(err);
        process.exit();
    }
}

main();