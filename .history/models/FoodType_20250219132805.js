import { DataTypes } from "sequelize";
import sequelize from "../connect.js";

const FoodType = sequelize.define(
    "FoodType",
    {
        type_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        type_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

export default FoodType;
