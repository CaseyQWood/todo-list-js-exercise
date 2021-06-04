const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];
// Create a new task by adding to the arrays
// A new task will be created as incomplete
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
  return task
}



// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

task1.logState()
task1.markCompleteTask()
task1.logState()


// newTask(task1); // Clean Cat Litter has not been completed
// newTask(task1);
// newTask(task1); // Clean Cat Litter has been completed

console.log(tasks)
