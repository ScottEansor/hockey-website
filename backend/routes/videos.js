import express from "express";
import fetch from "node-fetch";

const router = express.Router();
const VIMEO_ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN;

//hardcode option
// const VIDEOS = [
//     { id: "1061321851", type: "skatingReferences", title: "Ice Skating Drill 1", description: "Test description 1" },
//     { id: "1061321871", type: "skatingReferences", title: "Ice Skating Drill 2", description: "Test description 2" },
// ]

// router.get("/", async(req, res) => {
//     res.json(VIDEOS)
// })

router.get("/folders", async (req, res) => {
    try {
        const response = await fetch('https://api.vimeo.com/me/projects', {
            headers: {
                Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`
            }
        })
        const body = await response.json()
        res.json(body.data.filter((folder) => {
            return folder.metadata.connections.ancestor_path[0]?.name === "Hockey"
        }).map((folder) => {
            return {
                name: folder.name,
                id: folder.uri.split("/").pop()
            }
        }))
    } catch (error) {
        console.log(error)
    }
})

export default router;
