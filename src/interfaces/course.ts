// Tipo para representar un Curso
export interface Course {
  id?: number;
  course_name: string;
  credits: number;
  description: string;
  teacher_id: number; // Relación con un profesor
}

export interface PaginatedCourse {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Course[];
}
