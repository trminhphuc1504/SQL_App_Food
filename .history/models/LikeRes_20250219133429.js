import { DataTypes } from "sequelize";
import sequelize from "../connect.js";
import User from "./User.js";
import Restaurant from "./Restaurant.js";

const LikeRes = sequelize.define(
    "LikeRes",
    {
        like_res_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date_like: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: "like_res",
    }
);

LikeRes.belongsTo(User, { foreignKey: "user_id" });
LikeRes.belongsTo(Restaurant, { foreignKey: "res_id" });

export default LikeRes;
