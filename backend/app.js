import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser"
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from "./routers/userRoutes.js";
import tenantRouter from "./routers/tenatRoute.js";
import houseRouter from "./routers/houseRoutes.js";
import ownerRouter from "./routers/ownerRoutes.js";
import cookieParser from "cookie-parser";
import maintainanceRouter from "./routers/maintainance.js";
import verifyToken from "./utils/verifyToken.js";
import { verifyContract, verifyNationalId, verifyPaymentVerification } from "./utils/verifyProtectedImages.js";
import paymentRouter from "./routers/paymentRoutes.js";

process.env.TZ = 'UTC';

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser())
app.use('/photos', express.static('uploads'))
app.use('/contracts', verifyToken('admin', 'tenant', 'owner'), verifyContract, express.static('contracts'))
app.use('/verifications', verifyToken('admin', 'tenant', 'owner'), verifyPaymentVerification, express.static('verifications'))
app.use('/nationalids', verifyToken('admin', 'tenant', 'owner'), verifyNationalId, express.static('nationalids'))

dotenv.config();

app.use(express.urlencoded({extended:true}));

app.use('/uploads',express.static('uploads'));
app.use('/user',userRouter);
app.use('/tenant',tenantRouter);
app.use('/house',houseRouter)
app.use('/owner', ownerRouter);
app.use('/maintenance', maintainanceRouter);
app.use('/payment',paymentRouter);

//error handler
app.use((err,req,res,next) =>{
  let errorStatus = err.status || 500;
  let errorMessage = err.message ||" Something went wrong";
  if (err.name === 'MongoServerError' && err.code == 11000) {
    errorStatus = 400;
    errorMessage =  `This ${Object.keys(err.keyPattern)[0]}: ${err.keyValue[Object.keys(err.keyPattern)[0]]} is already registered`
  }
  return res.status(errorStatus).json({
   status:errorStatus,
   success:false,
   message:errorMessage,
   stack:err.stack
  })
})


const port = process.env.PORT 
const mongodb_url = process.env.MONGO_URL

mongoose.connect(mongodb_url)
  .then(() => {
    app.listen(port, () => {
      console.log("App is listening on port", port);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
