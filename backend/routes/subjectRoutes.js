import express from "express";

import {
  addSubject,
  getSubjects,
  deleteSubject,
} from "../controllers/subjectController.js";

const router = express.Router();

router.post("/subjects", addSubject);

router.get("/subjects", getSubjects);

router.delete(
  "/subjects/:id",
  deleteSubject
);

export default router;