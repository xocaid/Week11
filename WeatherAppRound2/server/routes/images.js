import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

//GET Request - FAVORITES
router.get("/", async (req, res) => {
  try {
    const weatherImg = await db.query("SELECT * FROM images ORDER BY image_name", [true]);
    res.send(weatherImg);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

export default router;