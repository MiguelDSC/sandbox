import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { OpenAIApi, Configuration } from "openai";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3500;
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.API_KEY_OPENAI,
});

const openai = new OpenAIApi(configuration);

app.post("/generate-text", async (req, res) => {
  const description = req.body.description;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `write a text about ${description}`,
      temperature: 0.4,
      max_tokens: 64,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    res.send(response.data.choices[0].text);
  } catch (e) {
    console.log(e);
    res.sendStatus(503);
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
