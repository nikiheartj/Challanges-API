import { test } from "@playwright/test";

export class ChallengerController {
  constructor(request) {
    this.request = request;
  }

  async createChallengerId() {
    return await test.step("Create a new Challenger ID", async () => {
      const response = await this.request.post("/challenger");
      return response;
    });
  }

  async getUserTodoList(token) {
    return await test.step(`Get user's todo list`, async () => {
      const response = await this.request.get(`/challenger/database/${token}`, {
        headers: {
          "x-challenger": token,
        },
      });
      return response;
    });
  }
}
