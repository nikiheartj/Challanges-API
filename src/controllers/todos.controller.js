import { test } from "@playwright/test";

export class TodosController {
  constructor(request) {
    this.request = request;
  }

  async getTodoList(token) {
    return await test.step("Get todos list", async () => {
      const response = await this.request.get("/todos", {
        headers: {
          "x-challenger": token,
        },
      });
      return response;
    });
  }

  async createTodo(token, options) {
    return await test.step("Create a todo", async () => {
      const response = await this.request.post("/todos", {
        headers: {
          "x-challenger": token,
        },
        ...options,
      });
      return response;
    });
  }

  async updateTodo(token, idTodo, options) {
    return await test.step("Update a todo", async () => {
      const response = await this.request.put(`/todos/${idTodo}`, {
        headers: {
          "x-challenger": token,
        },
        ...options,
      });
      return response;
    });
  }

  async deleteTodo(token, idTodo) {
    return await test.step("Delete a todo", async () => {
      const response = await this.request.delete(`/todos/${idTodo}`, {
        headers: {
          "x-challenger": token,
        },
      });
      return response;
    });
  }

  async filterByQuery(token, query) {
    return await test.step("Filter todos by the query", async () => {
      const response = await this.request.get(`${query}`, {
        headers: {
          "x-challenger": token,
        },
      });
      return response;
    });
  }
}
