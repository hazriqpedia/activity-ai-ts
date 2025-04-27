import { Router } from "express";
import { suggestActivites } from "../controllers/activityController";

const router = Router();

router.post("/suggest", suggestActivites);

export default router;
