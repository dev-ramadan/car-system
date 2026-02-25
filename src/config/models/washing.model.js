import conecation from "../connection.js";

export const washingTable = () => {
    const washing = `
    CREATE TABLE IF NOT EXISTS washing (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    cost DECIMAL(10,2) NOT NULL,
    wash_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    employee_id VARCHAR(36),
    car_id VARCHAR(36),

    FOREIGN KEY (employee_id) REFERENCES  employees(id),
    FOREIGN KEY (car_id) REFERENCES  cars(id)


    )
    `
    conecation.query(washing, (err, result) => {
        if (err){
            console.error("Error creating table:", err.message);
            return ;
        }
        console.log("Washing Table created successfully");

    });
}