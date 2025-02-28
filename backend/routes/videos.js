import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const VIMEO_ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN;

router.get("/", async (req, res) => {
    try {
        const response = await fetch("https://api.vimeo.com/me/videos", {
            headers: {
                Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch videos");
        }

        const data = await response.json();
        res.json(data.data); // Send only necessary video data
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ This is required to export the route properly
export default router;