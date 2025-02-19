import { DataTypes } from "sequelize";
import sequelize from "../connect.js"; // Đảm bảo kết nối với MySQL

const User = sequelize.define(
    "User",
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        pass_word: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false, // Không sử dụng các trường createdAt, updatedAt
    }
);

export default User;
