import { Request, Response } from "express";
import { getSuggestedActivities } from "../services/activityService";

const isValidEnergy = (value: any): value is "low" | "medium" | "high" =>
  ["low", "medium", "high"].includes(value);

export const suggestActivites = async (req: Request, res: Response) => {
  try {
    const { minutes, energyLevel } = req.body;

    if (!minutes || !energyLevel) {
      res.status(400).json({
        error: true,
        message: "Minutes and energy level are required.",
      });
      return;
    }

    if (isNaN(minutes) || !isValidEnergy(energyLevel)) {
      res.status(400).json({
        error: true,
        message:
          "Invalid minutes or energy level. Expected: number + 'low' | 'medium' | 'high'.",
      });
      return;
    }

    const activities = await getSuggestedActivities(minutes, energyLevel);

    res.json(activities);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: true, message: "Failed to suggest activities." });
  }
};
