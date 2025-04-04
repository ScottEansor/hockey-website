import express from "express";


const router = express.Router();
const VIMEO_ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN;

//hardcode option (dont use)
// const VIDEOS = [
//     { id: "1061321851", type: "skatingReferences", title: "Ice Skating Drill 1", description: "Test description 1" },
//     { id: "1061321871", type: "skatingReferences", title: "Ice Skating Drill 2", description: "Test description 2" },
// ]

// router.get("/", async(req, res) => {
//     res.json(VIDEOS)
// })

router.get("/folders", async (req, res) => {
    try {
        const response = await fetch('https://api.vimeo.com/me/projects?per_page=100', {
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
        res.status(500).send()
    }
})

router.get("/folders/:folderId", async (req, res) => {
    try {
        const response = await fetch(`https://api.vimeo.com/me/projects/${req.params.folderId}/items?per_page=100`, {
            headers: {
                Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`
            }
        })
        const body = await response.json()
        res.json(body.data.filter((entry) => {
            return entry.type === 'video'
        })
            .map((entry) => {
                return {
                    id: entry.video.uri.split("/").pop(),
                    name: entry.video.name,
                    description: entry.video.description,
                    videoWidth: entry.video.width,
                    videoHeight: entry.video.height
                }
            })
        )
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

export default router;
