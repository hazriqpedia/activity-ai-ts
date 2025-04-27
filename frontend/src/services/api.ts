import { Activity } from "../types/Activity";

const BASE_URL = "http://localhost:3001/api/activities"; // TO-DO: pull from config instead

export async function fetchSuggestedActivities(
  minutes: number,
  energyLevel: string
): Promise<Activity[]> {
  try {
    const res = await fetch(`${BASE_URL}/suggest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ minutes, energyLevel }),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch activities");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API error:", error);
    return [];
  }
}
