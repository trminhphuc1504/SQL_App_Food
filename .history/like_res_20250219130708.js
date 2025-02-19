import { DataTypes } from "sequelize";
import sequelize from "../connect";
import User from "./User";
import Restaurant from "./Restaurant";

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
    }
);

LikeRes.belongsTo(User, { foreignKey: "user_id" });
LikeRes.belongsTo(Restaurant, { foreignKey: "res_id" });

export default LikeRes;
