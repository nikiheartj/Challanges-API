import { ChallengerController, TodosController } from "./index";

export class AppApi {
  constructor(request) {
    this.request = request;
    this.todosController = new TodosController(request);
    this.challengerController = new ChallengerController(request);
  }
}
