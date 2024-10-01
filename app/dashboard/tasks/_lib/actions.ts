"use server"


import { getErrorMessage } from "@/lib/handle-error"

import type { CreateTaskSchema, UpdateTaskSchema } from "./validations"
import api from "@/services/axios-custom"

export async function createTask(input: CreateTaskSchema) {
    try {
      const response = await api.post('/tasks', input); // POST request to create a task
      return {
        data: response.data,
        error: null,
      };
    } catch (err) {
      return {
        data: null,
        error: getErrorMessage(err),
      };
    }
  }

  export async function updateTask(input: UpdateTaskSchema & { id: string }) {
    try {
      const response = await api.put(`/tasks/${input.id}`, input); // PUT request to update a task
      return {
        data: response.data,
        error: null,
      };
    } catch (err) {
      return {
        data: null,
        error: getErrorMessage(err),
      };
    }
  }

  export async function deleteTask(input: { id: string }) {
    try {
      await api.delete(`/tasks/${input.id}`); // DELETE request to delete a task
      return {
        data: null,
        error: null,
      };
    } catch (err) {
      return {
        data: null,
        error: getErrorMessage(err),
      };
    }
  }


