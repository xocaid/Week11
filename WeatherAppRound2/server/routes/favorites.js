import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

//GET Request - FAVORITES
router.get("/", async (req, res) => {
  try {
    const favoriteCity = await db.query("SELECT * FROM favorites ORDER BY id", [true]);
    res.send(favoriteCity);
  } catch (e) {
    return res.status(400).json({ e });
  }
});


//POST Request - FAVORITES
router.post('/', async (req, res) => {
  const favoriteCity = {
    id: req.body.id,
    city_name: req.body.city_name,
    zip_code: req.body.zip_code,
    user_id: req.body.user_id
  };
  console.log([favoriteCity.id, favoriteCity.city_name, favoriteCity.zip_code, favoriteCity.user_id]);

  try {
    const newFavCityEntry = await db.query(
      'INSERT INTO favorites(id, username, city_name, zip_code, user_id) VALUES($1, $2, $3, $4) RETURNING *',
      [favoriteCity.id, favoriteCity.city_name, favoriteCity.zip_code, favoriteCity.user_id],
    );
    console.log(newFavCityEntry);
    res.send(newFavCityEntry);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//DELETE Request - FAVORITES
router.delete("/:id", async (req, res) => {
  // : acts as a placeholder
  const favoriteCityId = req.params.id;
  try {
    await db.none("DELETE FROM favorites WHERE id=$1", [favoriteCityId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

export default router;