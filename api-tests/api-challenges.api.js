import { test, expect } from "@playwright/test";
import { TodoBuilder } from "../src/builder/index";
import { AppApi } from "../src/controllers/appApi.controller";

let token; // Session token

test.describe("API Challenges", () => {
  test.beforeAll(
    "Create X-Challenger token - @POST token (201)",
    async ({ request }) => {
      const appApi = new AppApi(request);
      const response = await appApi.challengerController.createChallengerId();

      token = response.headers()["x-challenger"];

      await test.step("Expected Result: Challenger is created", async () => {
        expect(response.status()).toBe(201);
        expect(response.headers()).toHaveProperty("x-challenger");
      });
    }
  );

  test("@GET the list of todos", async ({ request }) => {
    const appApi = new AppApi(request);
    const response = await appApi.todosController.getTodoList(token);
    const todos = await response.json();

    await test.step("Expected Result: Todo list is received", async () => {
      expect(response.status()).toBe(200);
      expect(todos.todos.length).toEqual(10);
    });
  });

  test("Create a todo with max out content. @POST", async ({ request }) => {
    const appApi = new AppApi(request);
    const newToDo = new TodoBuilder()
      .addTitle(50)
      .addDescription(200)
      .addDoneStatus(false)
      .generate();

    const response = await appApi.todosController.createTodo(token, {
      data: newToDo,
    });
    const body = await response.json();

    await test.step("Expected Result: Todo is created with max out content in the title & description fields", async () => {
      expect(body.title.length).toBeLessThanOrEqual(50);
      expect(body.description.length).toBeLessThanOrEqual(200);
      expect(response.status()).toBe(201);
    });
  });

  test("Retrieve the current todos database for the user. @GET", async ({
    request,
  }) => {
    const appApi = new AppApi(request);
    //*Get todo list
    const response = await appApi.todosController.getTodoList(token);
    const todos = await response.json();
    //* Get user's todo list
    const getUserTodos = await appApi.challengerController.getUserTodoList(
      token
    );
    const body = await getUserTodos.json();

    await test.step(`Expected Result: The user's todo list is received`, async () => {
      expect(getUserTodos.status()).toBe(200);
      expect(body.todos.length).toEqual(todos.todos.length);
    });
  });

  test("Full update a todo's fields via @PUT method", async ({ request }) => {
    const appApi = new AppApi(request);
    const updateToDo = new TodoBuilder()
      .addTitle(50)
      .addDescription(200)
      .addDoneStatus(false)
      .generate();

    const response = await appApi.todosController.updateTodo(token, 1, {
      data: updateToDo,
    });
    const body = await response.json();

    await test.step("Expected Result: Title, Description, Status fields are updated in the Todo item", async () => {
      expect(body).toEqual(expect.objectContaining(updateToDo));
      expect(response.status()).toBe(200);
    });
  });

  test("@GET todos list with a query filter", async ({ request }) => {
    const appApi = new AppApi(request);
    const query = "true"; //Set query as a value to filter todos
    const response = await appApi.todosController.filterByQuery(token, query);

    const body = await response.json();

    await test.step(`Expected Result: Todo items are filtered by the query "?doneStatus=${query}" in the todo list`, async () => {
      expect(response.status()).toBe(200);
      expect(body.todos.every((todo) => todo.doneStatus === query)).toBe(true);
    });
  });

  test("@DELETE a todo in the todos list", async ({ request }) => {
    const appApi = new AppApi(request);
    const idTodo = "3"; //Set todo ID
    const response = await appApi.todosController.deleteTodo(token, idTodo);
    const responseTodoList = await appApi.todosController.getTodoList(token);
    const body = await responseTodoList.json();

    await test.step("Expected Result: Todo is deleted in the todo list", async () => {
      expect(response.status()).toBe(200);
      expect(body.todos.some((todo) => todo.id === idTodo)).toBe(false);
    });
  });
});