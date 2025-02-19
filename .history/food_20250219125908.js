import express from "express";
import connect from "./connect"; // Import kết nối từ connect.js

const app = express();
const port = process.env.PORT || 3000;

// Kiểm tra kết nối
connect
    .authenticate()
    .then(() => {
        console.log("Kết nối đến cơ sở dữ liệu MySQL thành công!");
    })
    .catch((err) => {
        console.error("Lỗi kết nối đến MySQL:", err);
    });

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
