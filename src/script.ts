import mongoose from "mongoose";
import fs from "fs";
import { Word } from "./schema";

mongoose
  .connect(
    "mongodb+srv://artyomkarapetyan29:Y3qbzbigLPtAVvUA@cluster0.habv5iw.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    fs.readFile("words_alpha.txt", "utf8", async (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const lines = data.split("\n");
      const documents = lines.filter(Boolean).map((line) => {
        return { word: line };
      });

      try {
        await Word.insertMany(documents);
        console.log("Documents created successfully.");
      } catch (err) {
        console.error(err);
      } finally {
        mongoose.disconnect();
      }
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
