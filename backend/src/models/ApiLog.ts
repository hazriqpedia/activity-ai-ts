// backend/src/models/ApiLog.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ApiLogDocument extends Document {
  datetime: Date;
  prompt: string;
  response: string;
  queryDurationMs: number;
  responseStatus: number;
  llmProvider: "gemini" | "openai";
  llmModel: string;
}

const ApiLogSchema = new Schema<ApiLogDocument>({
  datetime: { type: Date, default: Date.now },
  prompt: { type: String, required: true },
  response: { type: String, required: true },
  queryDurationMs: { type: Number, required: true },
  responseStatus: { type: Number, required: true },
  llmProvider: { type: String, required: true, enum: ["gemini", "openai"] },
  llmModel: { type: String, required: true },
});

export const ApiLog = mongoose.model<ApiLogDocument>("ApiLog", ApiLogSchema);
