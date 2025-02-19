import { DataTypes } from "sequelize";
import sequelize from "../connect.js";
import User from "./User.js";
import Food from "./Food.js";

const Order = sequelize.define(
    "Order",
    {
        order_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        code: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        arr_sub_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        food_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "orders", // Đảm bảo tên bảng là orders
        timestamps: false,
    }
);

// Quan hệ giữa các bảng
Order.belongsTo(User, { foreignKey: "user_id" });
Order.belongsTo(Food, { foreignKey: "food_id" });

export default Order;
