import { todosReducer } from "../context/tasksReducer";
import { Task, ActionTypes } from "../context/types";


describe("task reducer", () => {
  const mockedTask: Task = {
    date: 1570897439973,
    title: "Test task",
    checked: false
  };

  it("should return initial state", () => {
    // @ts-ignore
    expect(todosReducer([], {})).toEqual([]);
  });

  it("should handle addTask", () => {
    expect(
      todosReducer([], {
        type: ActionTypes.addTask,
        payload: mockedTask
      })
    ).toEqual([mockedTask]);
  });

  it("should handle removeTask", () => {
    expect(
      todosReducer([mockedTask], {
        type: ActionTypes.removeTask,
        payload: 1570897439973
      })
    ).toEqual([]);
  });

  it("should handle makeTaskDone", () => {
    expect(
      todosReducer([mockedTask], {
        type: ActionTypes.makeTaskDone,
        payload: 1570897439973
      })
    ).toEqual([
      {
        date: 1570897439973,
        title: "Test task",
        checked: true
      }
    ]);
  });
});
