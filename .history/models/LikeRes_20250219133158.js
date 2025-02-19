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
            allowNull: false, // Đảm bảo trường này không null
        },
    },
    {
        timestamps: false, // Nếu bạn không muốn Sequelize tự động tạo các trường createdAt, updatedAt
    }
);

// Quan hệ giữa các bảng
LikeRes.belongsTo(User, { foreignKey: "user_id" });
LikeRes.belongsTo(Restaurant, { foreignKey: "res_id" });

export default LikeRes;
