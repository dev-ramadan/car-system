import conecation from "../connection.js";

export const customerTable = () => {
    const customer = `
    CREATE TABLE IF NOT EXISTS customers (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    customer_name VARCHAR(50) NOT NULL,
    phone VARCHAR(15),
    gmail VARCHAR(50) NOT NULL,
    national_id VARCHAR(15),
    address VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `
    conecation.query(customer, (err, result) => {
        if (err){
            console.error("Error creating table:", err.message);
            return ;
        }
        console.log("Cusromer Table created successfully");

    });
}