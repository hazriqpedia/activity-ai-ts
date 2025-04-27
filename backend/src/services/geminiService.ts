import { GoogleGenAI } from "@google/genai";
import { ApiLog } from "../models/ApiLog";

import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const geminiModelName = process.env.GEMINI_MODEL_NAME || "gemini-2.0-flash";

export const call = async (prompt: string): Promise<string> => {
  const startTime = Date.now();
  try {
    const result = await ai.models.generateContent({
      model: geminiModelName,
      contents: [{ parts: [{ text: prompt }] }],
    });

    const text = await result.text;
    console.log("text: ", text);
    const duration = Date.now() - startTime;

    // Save log
    await ApiLog.create({
      datetime: new Date(),
      prompt,
      response: text || "",
      queryDurationMs: duration,
      responseStatus: 200, // Assuming success
      llmProvider: "gemini",
      llmModel: geminiModelName,
    });

    return text || "";
  } catch (error: any) {
    console.log("GEMINI ERROR: ", error);
    const duration = Date.now() - startTime;

    await ApiLog.create({
      datetime: new Date(),
      prompt,
      response: error.message || "Unknown error",
      queryDurationMs: duration,
      responseStatus: error?.response?.status || 500,
      llmProvider: "gemini",
      llmModel: geminiModelName,
    });

    return "[]";
  }
};
