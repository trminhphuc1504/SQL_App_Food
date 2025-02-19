import express from "express";
import connect from "./connect"; // Import kết nối từ connect.js

const app = express();
const port = process.env.PORT || 3000;

// Middleware để xử lý JSON request
app.use(express.json());

//API 1:Like nhà hàng
app.post("/api/like_res", async (req, res) => {
    try {
        const { user_id, res_id, date_like } = req.body;
        const likeRes = await likeRes.create({
            user_id,
            res_id,
            data_like,
        });
        res.status(201).json({
            message: "Like restaurant successfully",
            likeRes,
        });
    } catch (error) {
        res.status(500).json({ message: "Error liking restaurant", error });
    }
});

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
