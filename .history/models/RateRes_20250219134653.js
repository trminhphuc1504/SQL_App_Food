import { DataTypes } from "sequelize";
import sequelize from "../connect.js";
import User from "./User.js";
import Restaurant from "./Restaurant.js";

// Định nghĩa model
const RateRes = connect.define(
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
        tableName: "rate_res", // Tên bảng trong cơ sở dữ liệu
        timestamps: false, // Nếu không sử dụng các cột createdAt, updatedAt
    }
);

export default RateRes;
