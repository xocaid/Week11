import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

//GET Request - Contacts
router.get("/", async (req, res) => {
  try {
    const posts = [
      {'Text':'Doing well today', 'username': 'adam', 'time': 'several minutes ago'},
      {'Text':'Got sushi tonight','username': 'adam', 'time': 'several minutes ago'}, 
      {'Text':'Got a turtle', 'username': 'adam', 'time': 'several minutes ago'}, 
      {'Text':'Went rock climbing', 'username': 'adam', 'time': 'several minutes ago'}, 
      {'Text':'did some sewing today', 'username': 'adam', 'time': 'several minutes ago'}
    ];
    res.send(posts);
  } catch (e) {
    return res.status(400).json({ e });
  }
});



export default router;