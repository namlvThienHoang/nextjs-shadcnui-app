
import { type GetTasksSchema } from "./validations"
import api from "@/services/axios-custom"

export async function getTasks(input: GetTasksSchema) {
  try {
    const response = await api.get('/tasks', { input });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
}

export async function fetchTaskCountByStatus() {
  try {
    const response = await api.get('/tasks/countByStatus');
    return response.data;
  } catch (error) {
    console.error('Error fetching task count by status:', error);
    return [];
  }
}
export async function fetchTaskCountByPriority() {
  try {
    const response = await api.get('/tasks/countByPriority');
    return response.data;
  } catch (error) {
    console.error('Error fetching task count by priority:', error);
    return [];
  }
}
