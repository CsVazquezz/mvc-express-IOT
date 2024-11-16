import pool from "../db";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { PaginatedTeacher, Teacher } from "../interfaces/teacher";

// Obtener todos los profesores
export const findAllTeachers = async (
  limit: number,
  offset: number,
): Promise<PaginatedTeacher> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM teachers LIMIT ? OFFSET ?",
    [limit, offset],
  );

  // Consulta para obtener el total de registros
  const [totalRows] = (await pool.query(
    "SELECT COUNT(*) as count FROM teachers",
  )) as [{ count: number }[], unknown];

  const total = totalRows[0].count;
  const totalPages = Math.ceil(total / limit);

  return {
    page: offset / limit + 1,
    limit,
    total,
    totalPages,
    data: rows as Teacher[],
  };
};

export const insertTeacher = async (teacher: Teacher): Promise<Teacher> => {
  const { first_name, last_name, department, email, phone } = teacher;

  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO teachers (first_name, last_name, department, email, phone) 
     VALUES (?, ?, ?, ?, ?)`,
    [first_name, last_name, department, email, phone],
  );

  const { insertId } = result;
  return { id: insertId, ...teacher };
};

export const updateTeacher = async (
  id: number,
  teacher: Teacher,
): Promise<Teacher> => {
  const { first_name, last_name, department, email, phone } = teacher;

  await pool.query<ResultSetHeader>(
    `UPDATE teachers
     SET first_name = ?, 
         last_name = ?, 
         department = ?, 
         email = ?, 
         phone = ?
     WHERE id = ?;`,
    [first_name, last_name, department, email, phone, id],
  );

  return { id, ...teacher };
};

export const deleteTeacher = async (id: number): Promise<number> => {
  await pool.query<ResultSetHeader>(`DELETE FROM teachers WHERE id = ?`, [id]);
  return id;
};
