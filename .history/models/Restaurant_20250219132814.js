import { DataTypes } from "sequelize";
import sequelize from "../connect.j";

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
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        timestamps: false,
    }
);

export default Restaurant;
