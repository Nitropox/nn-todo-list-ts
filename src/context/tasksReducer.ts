import createDataContext from "./createDataContext";
import { ActionTypes, Task, Action } from "./types";
import { addTask, removeTask, makeTaskDone } from "./actions";
const todosReducer = (state: Task[], action: Action) => {
  switch (action.type) {
    case ActionTypes.addTask:
      return [...state, action.payload];
    case ActionTypes.removeTask:
      return state.filter(task => task.date !== action.payload);
    case ActionTypes.makeTaskDone:
      return state.map(task =>
        task.date === action.payload
          ? { ...task, checked: !task.checked }
          : task
      );
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(
  todosReducer,
  {
    addTask,
    removeTask,
    makeTaskDone
  },
  [
    {
      date: 1570897439971,
      title: "Task 3",
      checked: false
    },
    {
      date: 1570897439972,
      title: "Task 2",
      checked: false
    },
    {
      date: 1570897439973,
      title: "Task 1",
      checked: true
    }
  ]
);
