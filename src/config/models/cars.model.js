import conecation from "../connection.js";

export const carsTable = () => {
    const cars = `
    CREATE TABLE IF NOT EXISTS cars (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    brand VARCHAR(50),
    color VARCHAR(30),
    price DECIMAL(10,2) NOT NULL,
    car_condition VARCHAR(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `
    conecation.query(cars, (err, result) => {
        if (err){
            console.error("Error creating table:", err.message);
            return ;
        }
        console.log("cars Table created successfully");

    });
}