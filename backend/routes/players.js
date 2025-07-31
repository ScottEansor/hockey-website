import express from "express";
import playerModel from "../models/player.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.user) {
      res.sendStatus(401);
      return;
    }
    await playerModel.create({ ...req.body, parent: req.user });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.get("/", async (req, res) => {
  try {
    if (!req.user) {
      res.sendStatus(401);
      return;
    }
    // we finished here <---- 7/9/2025
    const filter = {}
    if (!req.user.isAdmin){
      filter.parent = req.user 
    }
    const players = await playerModel.find(filter)
    //if not admin send back filter
    res.json(players)
    //if admin send back no filtered calculated 

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
export default router;
