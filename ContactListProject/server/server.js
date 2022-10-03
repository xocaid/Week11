import  express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import { config } from 'dotenv'; config();

//ROUTES
import db from "./db/db-connection.js";
import contactsRouter from "./routes/contacts.js";

const app = express();
const PORT = 5002;

app.use(cors());
app.use('/contacts', (contactsRouter));

app.get('/', (req, res) => {
  res.json("This is the backend.");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}.`));