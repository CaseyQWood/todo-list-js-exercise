const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

function newTask(title, descriptions) {
  const task ={
    title: title,
    descriptions: descriptions,
    complete: false,
    markCompleteTask: () => {this.complete = true},
    logState: () => {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  }
  return task;
}

task1.logState();
task1.markCompleteTask();
task1.logState();

console.log(tasks);
