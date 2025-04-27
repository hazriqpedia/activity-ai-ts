import { Activity } from "../types/Activity";
import { call } from "./geminiService";

export const getSuggestedActivities = async (
  minutes: number,
  energyLevel: "low" | "medium" | "high"
) => {
  const prompt = `
    Suggest 4 short activities I can do in under ${minutes} minutes based on my current energy levels: ${energyLevel}.
    The energy levels are selected from: "low", "medium", and "high".
    Respond with **raw JSON only**, do not wrap the response in markdown or code blocks. Each item must include:
    - title (string)
    - description (string)
    - category (e.g., "fun", "health", "learning", "home")
    - suitableEnergyLevels (array of one or more of: "low", "medium", "high")
    `;

  console.log("prompt: ", prompt);
  const rawResponse = await call(prompt);
  const cleanedText = rawResponse
    .replace(/^```json\s*/i, "") // remove opening ```json
    .replace(/^```\s*$/i, "") // remove trailing ``` if it's the only line
    .replace(/```$/, "")
    .trim(); // or trailing ``` at the end of text

  try {
    const parsed = JSON.parse(cleanedText);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error("Failed to parse Gemini response:", err);
    return [];
  }
};
