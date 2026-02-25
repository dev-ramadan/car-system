import conecation from "../connection.js";

export const employeeTable = () => {
    const employee = `
    CREATE TABLE IF NOT EXISTS employees (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    employee_name VARCHAR(50),
    phone VARCHAR(15),
    email VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `
    conecation.query(employee, (err, result) => {
        if (err){
            console.error("Error creating table:", err.message);
            return ;
        }
        console.log("employee Table created successfully");

    });
}