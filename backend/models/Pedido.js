import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Pedido = sequelize.define("Pedido",{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    producto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, { timestamps: false })

export default Pedido