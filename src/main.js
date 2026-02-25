import express from "express"
import conecation from "./config/connection.js";


const root = (app) => {
    app.use(express.json());
    // * ======Connection========
    conecation
}
export default root