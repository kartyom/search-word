"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Word = void 0;
const mongoose = require("mongoose");
const wordSchema = new mongoose.Schema({
    word: { type: String, required: true },
});
exports.Word = mongoose.model("Document", wordSchema);
