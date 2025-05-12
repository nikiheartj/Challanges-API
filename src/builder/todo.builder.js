import { faker } from "@faker-js/faker";

export class TodoBuilder {
  addTitle(length) {
    this.title = faker.lorem.text().substring(0, length);
    return this;
  }
  addDescription(length) {
    this.description = faker.lorem.text().substring(0, length);
    return this;
  }
  addDoneStatus(status) {
    this.doneStatus = status;
    return this;
  }
  generate() {
    return this;
  }
}
