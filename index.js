import express from "express";
import root from "./src/main.js";

const app = express();
const PORT = 9090;
(()=>{
    root(app);
    app.listen(PORT,()=>{
        console.log("server started in port",PORT);
    })
})()
