import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

//GET Request - USERS
router.get("/", async (req, res) => {
  try {
    const user = await db.query("SELECT * FROM users ORDER BY username ASC", [true]);
    res.send(user);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

//POST Request - USERS
router.post('/', async (req, res) => {
  const user = {
    id: req.body.id,
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  };
  console.log([user.id, user.username, user.first_name, user.last_name, user.email]);

  try {
    const createdUser = await db.query(
      'INSERT INTO users(id, username, first_name, last_name, email) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [user.id, user.username, user.first_name, user.last_name, user.email],
    );
    console.log(createdUser);
    res.send(createdUser);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//DELETE Request - USERS
router.delete("/:id", async (req, res) => {
  // : acts as a placeholder
  const userId = req.params.id;
  try {
    await db.none("DELETE FROM users WHERE id=$1", [userId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

export default router;