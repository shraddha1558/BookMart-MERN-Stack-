import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors";
import router from "./route/book.route.js"

import userroute from "./route/user.route.js"

const app = express()

app.use(express.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 4000;

const URI = process.env.MongoDBURI;

try {
    mongoose.connect(URI, {
  dbName: "bookstore", 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

    console.log("Connected to mongoDB");
}
catch (error){
    console.log("Error:", error)
}

// app.use("/",(req,res)=>{
// res.send("home route")
// });
app.use("/book",router);
app.use("/user",userroute);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})