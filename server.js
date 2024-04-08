const express = require("express")

const route = require("./Routes/route");
const cookieParser = require("cookie-parser");
let path = require("path")


console.log("object");
const app = express();
require("dotenv").config();

app.use(cookieParser())
// app.use(express.static("public"));

app.use("/public", express.static(path.join(__dirname, "/public")))

// Set EJS as templating engine 
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use("/", route);





app.listen(7888, (err) => {
    if (err)
        console.log(err)
    else
        console.log("http://localhost:8000")
})

