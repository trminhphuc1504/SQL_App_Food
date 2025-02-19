import { DataTypes } from "sequelize";
import sequelize from "../connect.js";
import User from "./User.js";
import Restaurant from "./Restaurant.js";

const RateRes = sequelize.define(
    "RateRes",
    {
        rate_res_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        date_rate: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        res_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "rate_res",
        timestamps: false,
    }
);

// Quan hệ giữa các bảng
RateRes.belongsTo(User, { foreignKey: "user_id" });
RateRes.belongsTo(Restaurant, { foreignKey: "res_id" });

export default RateRes;
