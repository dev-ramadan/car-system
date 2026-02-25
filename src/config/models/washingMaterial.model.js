

import conecation from "../connection.js";

export const washingMaterialTable = () => {
    const washingMaterial = `
    CREATE TABLE IF NOT EXISTS washingMaterials (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    material_name VARCHAR(50),
    material_type VARCHAR(50),
    price DECIMAL(10,2) NOT NULL,
    created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `
    conecation.query(washingMaterial, (err, result) => {
        if (err){
            console.error("Error creating table:", err.message);
            return ;
        }
        console.log("washingMaterial Table created successfully");

    });
}