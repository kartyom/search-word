"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const schema_1 = require("./schema");
const app = (0, express_1.default)();
// Connect to MongoDB using Mongoose
mongoose_1.default
    .connect("mongodb+srv://artyomkarapetyan29:Y3qbzbigLPtAVvUA@cluster0.habv5iw.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Mongoose connected"))
    .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
});
app.use(express_1.default.json());
app.post("/search", (req, res) => {
    console.log(req.body);
    const newWord = new schema_1.Word({
        word: "Barev",
    });
    mongoose_1.default.connection;
    res.status(200).send("barev");
});
app.listen(3000, () => console.log("Listening"));
