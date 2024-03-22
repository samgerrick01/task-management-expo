import { ITask } from './interface';

export function sortItemsByPrio(arr: ITask[]) {
  return arr.sort((a, b) => {
    if (a.priority === b.priority) {
      return a.title.localeCompare(b.title);
    } else {
      return a.priority ? -1 : 1;
    }
  });
}

export function countCompletedTasks(arr: ITask[]) {
  return arr.filter((task) => task.status).length;
}

export function countTodoTasks(arr: ITask[]) {
  return arr.filter((task) => !task.status).length;
}

export function countPriorityTasks(arr: ITask[]) {
  return arr.filter((task) => task.priority).length;
}

export function countAllTask(arr: ITask[]) {
  return arr.filter((task) => task).length;
}
