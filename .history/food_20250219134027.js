import express from "express";
import connect from "./connect.js"; // Kết nối Sequelize
import LikeRes from "./models/LikeRes.js"; // Mô hình LikeRes
import RateRes from "./models/RateRes.js"; // Mô hình RateRes
import Order from "./models/Order.js"; // Mô hình Order
import User from "./models/User.js"; // Mô hình User
import Restaurant from "./models/Restaurant.js"; // Mô hình Restaurant
import Food from "./models/Food.js"; // Mô hình Food
import { where } from "sequelize";
import { Op } from "sequelize";
const app = express();
const port = process.env.PORT || 3000;

// Middleware để xử lý JSON request
app.use(express.json());

// **API 1: Thêm Like Nhà Hàng**
app.post("/api/like_res", async (req, res) => {
    try {
        const { user_id, res_id, date_like } = req.body;

        // Kiểm tra xem date_like có tồn tại không
        if (!date_like) {
            return res.status(400).json({
                message: "Date_like is required",
            });
        }

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
app.get("/api/like_res/restaurant/:res_id", async (req, res) => {
    try {
        const resId = req.params.res_id; // Lấy res_id từ params
        const likes = await LikeRes.findAll({
            where: {
                res_id: resId,
            },
            include: [
                { model: User, attributes: ["full_name", "email"] },
                { model: Restaurant, attributes: ["res_name", "image"] },
            ],
        });

        if (likes.length > 0) {
            res.status(200).json(likes); // Trả kết quả nếu có dữ liệu
        } else {
            res.status(404).json({
                message: "No likes found for this restaurant",
            }); // Không có dữ liệu
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching likes", error });
    }
});

// **API 3: Lấy danh sách Like theo User**
app.get("/api/like_res/user/:user_id", async (req, res) => {
    const user_id = req.params.user_id;
    try {
        const likes = await LikeRes.findAll({
            where: { user_id },
            include: [
                {
                    model: Restaurant,
                    attributes: ["res_id", "res_name", "description"],
                },
            ],
        });
        res.status(200).json(likes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user likes", error });
    }
});

// **API 4: Thêm Đánh Giá Nhà Hàng**
app.post("/api/rate_res", async (req, res) => {
    try {
        const { user_id, res_id, amount, date_rate } = req.body;
        const rateRes = await RateRes.create({
            user_id,
            res_id,
            amount,
            date_rate,
        });
        res.status(201).json({
            message: "Rated restaurant successfully",
            rateRes,
        });
    } catch (error) {
        res.status(500).json({ message: "Error rating restaurant", error });
    }
});

// **API 5: Lấy danh sách Đánh Giá theo Nhà Hàng**
app.get("/api/rate_res/restaurant/:res_id", async (req, res) => {
    const res_id = req.params.res_id;
    try {
        const rates = await RateRes.findAll({
            where: { res_id },
            include: [
                {
                    model: User,
                    attributes: ["user_id", "full_name", "email"],
                },
            ],
        });
        res.status(200).json(rates);
    } catch (error) {
        res.status(500).json({ message: "Error fetching ratings", error });
    }
});

// **API 6: Lấy danh sách Đánh Giá theo User**
app.get("/api/rate_res/user/:user_id", async (req, res) => {
    const user_id = req.params.user_id;
    try {
        const rates = await RateRes.findAll({
            where: { user_id },
            include: [
                {
                    model: Restaurant,
                    attributes: ["res_id", "res_name", "description"],
                },
            ],
        });
        res.status(200).json(rates);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user ratings", error });
    }
});

// **API 7: Thêm Đơn Hàng (Order)**
app.post("/api/orders", async (req, res) => {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;

    try {
        const order = await Order.create({
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id,
        });
        res.status(201).json({
            message: "Order placed successfully",
            order,
        });
    } catch (error) {
        res.status(500).json({ message: "Error placing order", error });
    }
});

// **API 8: Lấy danh sách Đơn Hàng theo User**
app.get("/api/orders/user/:user_id", async (req, res) => {
    const user_id = req.params.user_id;
    try {
        const orders = await Order.findAll({
            where: { user_id },
            include: [
                {
                    model: Food,
                    attributes: ["food_id", "food_name", "price"],
                },
            ],
        });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders", error });
    }
});

// **API 9: Lấy danh sách Đơn Hàng theo Món Ăn (Food)**
app.get("/api/orders/food/:food_id", async (req, res) => {
    const food_id = req.params.food_id;
    try {
        const orders = await Order.findAll({
            where: { food_id },
            include: [
                {
                    model: User,
                    attributes: ["user_id", "full_name", "email"],
                },
            ],
        });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders", error });
    }
});

// Kiểm tra kết nối với MySQL
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
