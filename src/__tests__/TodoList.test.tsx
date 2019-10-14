import { TodoList } from "../components/TodoList";
import React from "react";
import { shallow } from "enzyme";
import { Task } from "../context/types";

describe("TodoList component", () => {
  const mockedList: Task[] = [
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
  ];

  it("Renders TodoList component", () => {
    expect(shallow(<TodoList list={mockedList} />).length).toEqual(1);
  });

  it("Matches the snapshot", () => {
    expect(shallow(<TodoList list={mockedList} />)).toMatchSnapshot();
  });
});
