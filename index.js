// A new task will be created as incomplete
function newTask(title, desc) {
  const task = {
    title,
    desc,
    complete: false,
    completeTask: function() {
      this.complete = true;
    },
    logTaskState : function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  }
  return task;
}

const task1 = newTask('Code more', 'Finish the compass work and do stretch exercises if you have time')
const task2 = newTask('Do groceries', 'Check the companion app for what items need to be bought and purchase them')
const task3 = newTask('Race,race,race', 'Play some NFS: Heat')
const taskList = [task1, task2, task3];

console.log(taskList)
task3.completeTask()
task3.logTaskState()
task2.logTaskState()
