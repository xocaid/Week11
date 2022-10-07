import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

//GET Request - Contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await db.any("SELECT * FROM contacts ORDER BY first_name ASC", [true]);
    res.send(contacts);
  } catch (e) {
    return res.status(400).json({ e });
  }
});


//POST Request - Contacts
router.post('/', async (req, res) => {
  const contact = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    notes: req.body.notes
  };
  console.log([contact.first_name, contact.last_name, contact.email, contact.phone_number, contact.notes]);

  try {
    const createdContact = await db.one(
      'INSERT INTO contacts(first_name, last_name, email, phone_number,notes) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
      [contact.first_name, contact.last_name, contact.email, contact.phone_number, contact.notes],
    );
    console.log(createdContact);
    res.send(createdContact);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//DELETE Request - Contacts
router.delete("/:id", async (req, res) => {
  // : acts as a placeholder
  const contactsId = req.params.id;
  try {
    await db.none("DELETE FROM contacts WHERE id=$1", [contactsId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

export default router;