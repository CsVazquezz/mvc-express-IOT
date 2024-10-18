// routes/usuarios.ts
import { Router } from "express";
import {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} from "../controllers/student";

const router = Router();

router.post("/", createStudent);

// Regresa todos los alumnos en la base de datos
router.get("/students", getStudents);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;
