import { DataTypes } from "sequelize";
import sequelize from "../connect.js";

const Restaurant = sequelize.define(
    "Restaurant",
    {
        res_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        res_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
    },
    {
        tableName: "restaurant", // Đảm bảo tên bảng đúng
        timestamps: false,
    }
);

export default Restaurant;
