import conecation from "../connection.js";

export const salesTable = () => {
    const sales = `
    CREATE TABLE IF NOT EXISTS sales (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    sale_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    sale_price DECIMAL(10,2) NOT NULL,
    customer_id VARCHAR(36),
    car_id VARCHAR(36),
    employee_id VARCHAR(36),

    FOREIGN KEY (customer_id) REFERENCES  customers(id),
    FOREIGN KEY (car_id) REFERENCES  cars(id),
    FOREIGN KEY (employee_id) REFERENCES  employees(id)


    )
    `
    conecation.query(sales, (err, result) => {
        if (err){
            console.error("Error creating table:", err.message);
            return ;
        }
        console.log("Sales Table created successfully");

    });
}