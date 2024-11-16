import { Teacher } from "../interfaces/teacher";
import {
  findAllTeachers,
  insertTeacher,
  updateTeacher,
  deleteTeacher,
} from "../models/teacher";

// Obtener todos los profesores
export const findAll = async (limit: number, offset: number) => {
  return await findAllTeachers(limit, offset);
};

export const insert = async (teacher: Teacher) => {
  return await insertTeacher(teacher);
};

export const update = async (id: number, teacher: Teacher) => {
  return await updateTeacher(id, teacher);
};

export const deleteById = async (id: number) => {
  return await deleteTeacher(id);
};
