import { DataTypes } from "sequelize";
import sequelize from "../connect.js";
import User from "./User.js";
import Food from "./Food.js";

const Order = sequelize.define(
    "Order",
    {
        order_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        arr_sub_id: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);

// Quan hệ giữa các bảng
Order.belongsTo(User, { foreignKey: "user_id" });
Order.belongsTo(Food, { foreignKey: "food_id" });

export default Order;
