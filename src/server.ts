import express from "express";
import mongoose from "mongoose";
import { Word } from "./schema";
const app = express();

mongoose
  .connect(
    "mongodb+srv://artyomkarapetyan29:Y3qbzbigLPtAVvUA@cluster0.habv5iw.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Mongoose connected"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

app.use(express.json());
app.get("/api/search", (req, res) => {
  const { w } = req.query;
  Word.find({ word: w })
    .then(() => res.status(200).send())
    .catch(() => res.status(404).send());
});

app.post("/api/normalize", async (req, res) => {
  const { word } = req.body;
  const clearWord = keepLettersOnly(word);
  const lowerCase = clearWord.toLowerCase();
  console.log(lowerCase);

  Word.find({ word: lowerCase })
    .then((d) => {
      console.log("lowerCsse s", d);
      d
        ? res.status(400).send("Couldn't find the word")
        : res.status(200).send(lowerCase);
    })
    .catch(() => res.status(400).send("Couldn't find the word"));
});

function keepLettersOnly(word: string): string {
  return word.replace(/[^a-zA-Z]/g, "");
}

app.listen(3000, () => console.log("Listening"));
