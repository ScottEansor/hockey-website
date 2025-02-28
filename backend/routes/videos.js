import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const router = express.Router();
const VIMEO_ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN;

// 📌 Manually define folder contents (Vimeo API doesn't allow folder-based retrieval yet)
const VIDEO_CATEGORIES = {
    iceSkating: [
        { id: "1061321851", name: "Ice Skating Drill 1", description: "Test description 1" },
        { id: "1061321871", name: "Ice Skating Drill 2", description: "Test description 2" },
    ],
    iceShooting: [],
    offIceShooting: [],
    offIceStickhandling: [],
    generalHockey: [],
};

// 📌 Fetch video details from Vimeo API
async function fetchVideoDetails(videoId) {
    try {
        const response = await fetch(`https://api.vimeo.com/videos/${videoId}`, {
            headers: {
                Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch video ${videoId} from Vimeo`);
        }

        const vimeoData = await response.json();

        return {
            id: videoId,
            name: vimeoData.name, // Use Vimeo's video title
            description: vimeoData.description || "No description available.", // Use Vimeo's video description
            uri: vimeoData.uri,
            link: vimeoData.link,
        };
    } catch (error) {
        console.error("Error fetching video:", error);
        return null;
    }
}


// 📌 Route to get videos by category
router.get("/:category", async (req, res) => {
    const category = req.params.category;

    if (!VIDEO_CATEGORIES[category]) {
        return res.status(400).json({ error: "Invalid category" });
    }

    try {
        const videoDetails = await Promise.all(
            VIDEO_CATEGORIES[category].map((video) => fetchVideoDetails(video.id))
        );

        res.json(videoDetails.filter((video) => video !== null)); // Remove failed requests
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default router;
