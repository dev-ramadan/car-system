import conecation from "../connection.js";

export const paymentTable = () => {
    const payment = `
    CREATE TABLE IF NOT EXISTS payments (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    payment_method VARCHAR(20),
    price DECIMAL(10,2),
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    customer_id VARCHAR(36),
    purchase_id VARCHAR(36),
    sales_id VARCHAR(36),
    FOREIGN KEY (customer_id) REFERENCES  customers(id),
    FOREIGN KEY (purchase_id) REFERENCES  purchases(id),
    FOREIGN KEY (sales_id) REFERENCES  sales(id)


    )
    `
    conecation.query(payment, (err, result) => {
        if (err){
            console.error("Error creating table:", err.message);
            return ;
        }
        console.log("payment Table created successfully");

    });
}