const express =  require("express")

const route = require("./Routes/route");
const cookieParser = require("cookie-parser");


console.log("object");
const app = express();
require("dotenv").config();

app.use(cookieParser())
app.use(express.static("public"));

// Set EJS as templating engine 
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());



app.use("/" , route);





app.listen(7888) 

