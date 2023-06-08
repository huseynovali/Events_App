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
app.use('/location', locationRouter)
app.use('/category', categoryRouter)
app.use('/events', eventsRouter)
app.use("/img", express.static(join(__dirname, 'img')));

app.listen(5000, () => console.log("listen..."))


