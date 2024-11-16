// Tipo para representar un Alumno
export interface Teacher {
  id?: number;
  first_name: string;
  department: string;
  last_name: string;
  email: string;
  phone?: string;
}

export interface PaginatedTeacher {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Teacher[];
}
