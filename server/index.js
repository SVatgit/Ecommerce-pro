
import  express  from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors from 'cors';
 import  Connection  from "./Database/db.js";
import DefaultData from "./Default.js";
import Router from "./routes/route.js";


const app = express();

const PORT=5000;

dotenv.config()

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',Router);


const USERNAME= process.env.DB_User;
const PASSWORD= process.env.DB_PASSWORD;


Connection(USERNAME,PASSWORD);
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`))
DefaultData();