import React from "react";
import { SingleTask } from "./SingleTask";
import { Task } from "../context/types";

interface TodoListProps {
  list: Task[];
}

export const TodoList: React.FC<TodoListProps> = ({ list }) => {
  return (
    <ul className="list-group pt-4">
      {list.map((item: Task) => {
        return <SingleTask key={item.date} item={item} />;
      })}
    </ul>
  );
};
