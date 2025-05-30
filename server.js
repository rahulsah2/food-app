const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require('dotenv');
const connectDb = require('./config/db');

//dotenv configuration
dotenv.config();
//db connection
connectDb();

//rest object
const app = express()

//midelware
app.use(cors());
app.use(express.json()); 
app.use(morgan('dev'));

//route
app.use("/api/v1/test",require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user",require('./routes/userRoutes'));
app.use("/api/v1/resturant",require("./routes/resturantRoutes"));

app.get('/',(req,res)=>{
    return res.status(200).send("hello")
})

//port 
const PORT = process.env.PORT || 3000 ;

//listen
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})