"use server"


import { getErrorMessage } from "@/lib/handle-error"

import type { CreateTaskSchema, UpdateTaskSchema } from "./validations"
import api from "@/services/axios-custom"
import { Task } from "@/types/schema";

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

  export async function updateTasks(input: {
    ids: string[]
    label?: Task["label"]
    status?: Task["status"]
    priority?: Task["priority"]
  }) {
    try {
      const response = await api.put('/tasks/updates', {
        data: input
        }); 
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
      const response = await api.delete(`/tasks/${input.id}`); // DELETE request to delete a task
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

  export async function deleteTasks(input: { ids: string[] }) {
    try {
      const response = await api.delete('/tasks/deletes', {
        data: input.ids
        }); 
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


