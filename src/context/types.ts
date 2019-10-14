import { AddTaskAction, RemoveTaskAction, MakeTaskDoneAction } from "./actions";
export interface Task {
  date: number;
  title: string;
  checked: boolean;
}

export enum ActionTypes {
  addTask,
  removeTask,
  makeTaskDone
}

export type Action = AddTaskAction | RemoveTaskAction | MakeTaskDoneAction;
