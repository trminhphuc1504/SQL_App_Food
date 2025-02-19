import { DataTypes } from "sequelize";
import sequelize from "../connect.js";
import FoodType from "./FoodType.js";

const Food = sequelize.define(
    "Food",
    {
        food_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        food_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        image: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
    },
    {
        tableName: "food", // Tên bảng trong cơ sở dữ liệu là "food"
        timestamps: false,
    }
);

// Quan hệ giữa các bảng
Food.belongsTo(FoodType, { foreignKey: "type_id" });

export default Food;
