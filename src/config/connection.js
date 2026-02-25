import mysql from "mysql2"
import { customerTable } from "./models/customer.js";
import { carsTable } from "./models/cars.model.js";
import { employeeTable } from "./models/employee.model.js";
import { paymentTable } from "./models/payment.model.js";
import { purchaseTable } from "./models/purchase.model.js";
import { salesTable } from "./models/sales.model.js";
import { washingMaterialTable } from "./models/washingMaterial.model.js";
import { washing_washingMaterialTable } from "./models/washing_washingMaterial.model.js";
import { washingTable } from "./models/washing.model.js";
const conecation = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cars_center",
    port: 3307
})
conecation.connect((error) => {
    if (error)
        return console.error(error.message);
        // * ======Database Table====
    customerTable();
    carsTable();
    employeeTable();
    paymentTable();
    purchaseTable();
    salesTable();
    washingMaterialTable();
    washingTable();
    washing_washingMaterialTable();
    return console.log("conecation success");
});

export default conecation