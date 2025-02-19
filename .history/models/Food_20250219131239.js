import { DataTypes } from "sequelize";
import sequelize from "../connect";
import FoodType from "./FoodType";

const Food = sequelize.define(
    "Food",
    {
        food_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        food_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

// Quan hệ giữa các bảng
Food.belongsTo(FoodType, { foreignKey: "type_id" });

export default Food;
