import express, { json } from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;
app.use(cors());
app.use(express.json());

app.post("/generate-text", (req, res) => {
  console.log(req.body.description);
  const description = req.body.description;

  //   const generatedText = axios
  //     .post("/user", {
  //       firstName: "Fred",
  //       lastName: "Flintstone",
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  console.log(description);
  res.send(description);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
