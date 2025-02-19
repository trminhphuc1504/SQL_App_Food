import { DataTypes } from "sequelize";
import sequelize from "../connect";
import User from "./User";
import Restaurant from "./Restaurant";

const RateRes = sequelize.define(
    "RateRes",
    {
        rate_res_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date_rate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

// Quan hệ giữa các bảng
RateRes.belongsTo(User, { foreignKey: "user_id" });
RateRes.belongsTo(Restaurant, { foreignKey: "res_id" });

export default RateRes;
