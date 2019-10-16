import React, { useState, useContext } from "react";
import { Context as TodosContext } from "../context/tasksReducer";

export const TodoInput = () => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const { addTask } = useContext(TodosContext);

  const submitHandler = (event: any): void => {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      setIsValid(false);
    } else {
      setIsValid(true);
      addTask(+new Date(), input, () => setInput(""));
    }
  };

  return (
    <div className="row pt-2">
      <form
        className={`col needs-validation ${isValid ? "" : "was-validated"}`}
        noValidate
        onSubmit={submitHandler}
      >
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Wprowadź zadanie"
            value={input}
            onChange={event => setInput(event.target.value)}
            maxLength={100}
            required
          />
          <div className="input-group-append">
            <button className="btn btn-primary rounded-right" type="submit">
              +
            </button>
          </div>
          <div className="valid-feedback">Pole wypełnione poprawnie</div>
          <div className="invalid-feedback">To pole nie moe być puste!</div>
        </div>
      </form>
    </div>
  );
};
