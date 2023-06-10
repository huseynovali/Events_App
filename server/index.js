import express from "express"
import dotenv from "dotenv"
import { dbConnect } from "./connection/db.js";
import cors from "cors"
import locationRouter from "./Router/locationRouter.js";
import categoryRouter from "./Router/categoryRoute.js";
import eventsRouter from "./Router/eventRoute.js";
import fileUpload from "express-fileupload";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import authRouter from "./Router/authRouter.js";
import jwt from "jsonwebtoken";
import cartRouter from "./Router/cartRouter.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config()

const app = express();
app.use(express.json())
app.use(
    fileUpload({
        safeFileNames: true,
        useTempFiles: true,
        preserveExtension: true,
    })
);
dbConnect();


app.use(cors());

app.use((req, res, next) => { 
    if (req.url == '/auth/login' || req.url == '/auth/register') {
        next();
    }
    else {
        if (req.headers.authorization) {
            let token = req.headers.authorization.split(' ')[1];
         
            try {
                jwt.verify(token, process.env.PRIVATE_KEY);
                next();
            } catch (error) {
                res.status(401).json({ "msg": "giris edin" })
            }
        }
        else {
            res.status(401).json({ "msg": "giris edin" })
        }
    }
})
app.use('/location', locationRouter)
app.use('/category', categoryRouter)
app.use('/events', eventsRouter)
app.use("/cart",cartRouter)
app.use("/img", express.static(join(__dirname, 'img')));
app.use("/auth", authRouter);


app.listen(5001, () => console.log("listen..."))



