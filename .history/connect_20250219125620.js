import dotenv from "dotenv";
import { Sequelize } from "sequelize";

//load các biến môi trường từ file .env
dotenv.config();

// tạo kết nối đến cơ sở dữ liệu
const connect = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        port: process.env.DB_PORT,
    }
);
