import { ActionTypes, Task } from "./types";

type Dispatch<A> = (value: A) => void;

export interface AddTaskAction {
  type: ActionTypes.addTask;
  payload: Task;
}

export interface RemoveTaskAction {
  type: ActionTypes.removeTask;
  payload: number;
}

export interface MakeTaskDoneAction {
  type: ActionTypes.makeTaskDone;
  payload: number;
}

export const addTask = (dispatch: Dispatch<AddTaskAction>) => (
  date: number,
  title: string,
  callback?: Function
) => {
  dispatch({
    type: ActionTypes.addTask,
    payload: { date, title, checked: false }
  });
  if (callback) {
    callback();
  }
};

export const removeTask = (dispatch: Dispatch<RemoveTaskAction>) => (
  date: number
) => {
  dispatch({ type: ActionTypes.removeTask, payload: date });
};

export const makeTaskDone = (dispatch: Dispatch<MakeTaskDoneAction>) => (
  date: number
) => {
  dispatch({ type: ActionTypes.makeTaskDone, payload: date });
};
