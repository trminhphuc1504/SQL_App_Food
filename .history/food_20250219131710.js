import express from "express";
import connect from "./connect"; // Kết nối Sequelize
import LikeRes from "./models/LikeRes"; // Mô hình LikeRes
import RateRes from "./models/RateRes"; // Mô hình RateRes
import Order from "./models/Order"; // Mô hình Order
import User from "./models/User"; // Mô hình User
import Restaurant from "./models/Restaurant"; // Mô hình Restaurant
import Food from "./models/Food"; // Mô hình Food
import { where } from "sequelize";

const app = express();
const port = process.env.PORT || 3000;

// Middleware để xử lý JSON request
app.use(express.json());

// **API 1: Thêm Like Nhà Hàng**
app.post("/api/like_res", async (req, res) => {
    try {
        const { user_id, res_id, date_like } = req.body;
        const likeRes = await LikeRes.create({
            user_id,
            res_id,
            date_like,
        });
        res.status(201).json({
            message: "Liked restaurant successfully",
            likeRes,
        });
    } catch (error) {
        res.status(500).json({ message: "Error liking restaurant", error });
    }
});


// **API 2: Lấy danh sách Like theo Nhà Hàng**
app.get("/api/like_res/restaurant/:res_id",async(req,res)=>{
    const res_id = req.params.res_id;
    try{
        const likes = await LikeRes.findAll({
            where:{res_id},
            include:[
                {
                    model:User,
                    attributes:['user_id,'full_name','email']
                }
            ]
        })
    }
})


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
