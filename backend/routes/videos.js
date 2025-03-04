import express from "express";
import fetch from "node-fetch";

const router = express.Router();
const VIMEO_ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN;

const VIDEO_CATEGORIES = {
    skatingReferences: [
        { id: "1061321851", name: "Ice Skating Drill 1", description: "Test description 1" },
        { id: "1061321871", name: "Ice Skating Drill 2", description: "Test description 2" },
    ],
    shootingReferences: [],
    offIceShooting: [],
    offIceStickhandling: [],
    more: [],
};

// const VIDEO_CATEGORIES = [
//     { id: "1061321851", type: "skatingReferences", title: "Ice Skating Drill 1", description: "Test description 1" },
//     { id: "1061321851", type: "skatingReferences", title: "Ice Skating Drill 2", description: "Test description 2" }
// ]

async function fetchVideoDetails(videoId) {
    try {
        const response = await fetch(`https://api.vimeo.com/videos/${videoId}`, {
            headers: {
                Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
            },
        });

        if (!response.ok) {
            const error = await response.text()
            console.log(error)
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
        console.error("Error fetching video:", error)
        return null;
    }
}


router.get("/:category", async (req, res) => {
    const category = req.params.category

    if (!VIDEO_CATEGORIES[category]) {
        return res.status(400).json({ error: "Invalid category" })
    }

    try {
        const videoDetails = await Promise.all(
            VIDEO_CATEGORIES[category].map((video) => fetchVideoDetails(video.id))
        )

        res.json(videoDetails.filter((video) => video !== null)); // Remove failed requests
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


export default router;
