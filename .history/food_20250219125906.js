import connect from "./connect";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

connect.authenticate().then(() => {
    console.log("Kết nối đế cơ sở dữ liệu MYSQL thành công!");
}).catch;
