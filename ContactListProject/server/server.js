import  express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import { config } from 'dotenv'; config();

//ROUTES
import db from "./db/db-connection.js";
import postsRouter from "./routes/posts.js";

const app = express();
const PORT = 4002;

app.use(cors());
//Body Parser: Process data sent in an HTTP request body aka  the req.body
app.use(bodyParser.json());
app.use('/posts', (postsRouter));

app.get('/', (req, res) => {
  res.json("This is the backend.");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}.`));