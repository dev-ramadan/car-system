import conecation from "../connection.js";

export const purchaseTable = () => {
    const purchase = `
    CREATE TABLE IF NOT EXISTS purchases (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_price DECIMAL(10,2),
    customer_id VARCHAR(36),
    car_id VARCHAR(36),
    employee_id VARCHAR(36),
    FOREIGN KEY (customer_id) REFERENCES  customers(id),
    FOREIGN KEY (car_id) REFERENCES  cars(id),
    FOREIGN KEY (employee_id) REFERENCES  employees(id)


    )
    `
    conecation.query(purchase, (err, result) => {
        if (err){
            console.error("Error creating table:", err.message);
            return ;
        }
        console.log("purchase Table created successfully");

    });
}