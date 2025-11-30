export default class Task {
  constructor(name, dueDate = "No date") {
    this.name = name;
    this.dueDate = dueDate;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }

  getDateFormatted() {
    if (!this.dueDate || typeof this.dueDate !== "string") return "No date";

    const parts = this.dueDate.split("/");
    const [day, month, year] = parts;

    if (!day || !month || !year)
      return this.dueDate === "No date" ? "No date" : this.dueDate;

    const d = day.padStart(2, "0");
    const m = month.padStart(2, "0");
    return `${m}/${d}/${year}`;
  }
}
