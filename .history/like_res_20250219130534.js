import { DataTypes } from "sequelize";
import sequelize from "./connect";

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
        },
        email: {
            type: DataTypes.STRING,
        },
        pass_word: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);

export default User;
