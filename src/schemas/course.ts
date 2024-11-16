import { z } from "zod";

export const courseSchema = z.object({
  course_name: z.string().min(2, {
    message: "El nombre del curso debe tener al menos 2 caracteres",
  }),
  credits: z
    .number()
    .int()
    .positive({ message: "Los créditos deben ser un número positivo" })
    .max(10, { message: "Los créditos no pueden exceder 10" }),
  description: z
    .string()
    .min(10, { message: "La descripción debe tener al menos 10 caracteres" }),
  teacher_id: z
    .number()
    .int()
    .positive({ message: "El ID del profesor debe ser un número positivo" }),
});
