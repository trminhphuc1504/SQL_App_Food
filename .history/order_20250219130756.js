import { DataTypes } from "sequelize";
import sequelize from "../connect";
import User from "./User";
import Food from "./Food";

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

Order.belongsTo(User, { foreignKey: "user_id" });
Order.belongsTo(Food, { foreignKey: "food_id" });

export default Order;
