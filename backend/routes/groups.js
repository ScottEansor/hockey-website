import express from "express";
import groupModel from "../models/group.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.user) {
      res.sendStatus(401);
      return;
    }
    await groupModel.create(req.body);
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
    if (!req.user.isAdmin) {
      res.sendStatus(403);
      return;
    }
    const groups = await groupModel.find({})
    res.json(groups);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
export default router;
