import React, { useContext } from "react";
import { Context as TodosContext } from "../context/tasksReducer";
import { Task } from "../context/types";

interface SingleTaskProps {
  item: Task;
}
export const SingleTask: React.FC<SingleTaskProps> = ({ item }) => {
  const { makeTaskDone, removeTask } = useContext(TodosContext);

  return (
    <li className="list-group-item pt-3">
      <div className="row align-items-center">
        <div className={`col pl-4  ${item.checked ? " text-success" : ""}`}>
          <div className="row">
            <small className="pl-4">
              dodane: {new Date(item.date).toLocaleString("pl-PL")}
            </small>
          </div>
          <div className="row ">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultChecked={item.checked}
                onChange={() => {
                  makeTaskDone(item.date);
                }}
                id={item.date.toString()}
              />
              <label
                className="form-check-label pl-1"
                htmlFor={item.date.toString()}
              >
                {item.title}
              </label>
            </div>
          </div>
        </div>
        <div className="col-xs-2 mr-1 ">
          <button
            type="button"
            className={`btn btn-danger ${item.checked ? "disabled" : ""}`}
            disabled={item.checked}
            onClick={() => removeTask(item.date)}
          >
            Usuń
          </button>
        </div>
      </div>
    </li>
  );
};
