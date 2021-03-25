//express import statement

const express= require("express");
require("./connect/db");

//importing players route
const router= require("./router/route");
//port mangement
const port= process.env.PORT || 3000;

const app = express();

//to read json data via postman
app.use(express.json());

app.use(router);
 
app.listen(port, ()=>{
    console.log(`live connection at port number ${port}`);
})