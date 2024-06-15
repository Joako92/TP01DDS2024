import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Comercio = sequelize.define("Comercio", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Abierto"
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    detalle: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, { timestamps: false });

export default Comercio;