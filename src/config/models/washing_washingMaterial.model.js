//ON DELETE CASCADE


import conecation from "../connection.js";

export const washing_washingMaterialTable = () => {
    const washing_washingMaterial = `
    CREATE TABLE IF NOT EXISTS washing_washingMaterials (
    washing_id VARCHAR(36),
    washingMaterial_id VARCHAR(36),
    PRIMARY KEY (washing_id, washingMaterial_id),

    FOREIGN KEY (washing_id) REFERENCES washing(id)
        ON DELETE CASCADE,

    FOREIGN KEY (washingMaterial_id) REFERENCES washingMaterials(id)
        ON DELETE CASCADE,
    created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `
    conecation.query(washing_washingMaterial, (err, result) => {
        if (err) {
            console.error("Error creating table:", err.message);
            return;
        }
        console.log("washing_washingMaterial Table created successfully");

    });
}