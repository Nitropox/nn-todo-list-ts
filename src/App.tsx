import React, { useState, useContext } from "react";
import "./App.css";
import { ProgressBar } from "./components/ProgressBar";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { Tabs } from "./components/Tabs";
import { Provider as TodosProvider } from "./context/tasksReducer";
import { Context as TodosContext } from "./context/tasksReducer";
import { Task } from "./context/types";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { state } = useContext(TodosContext);

  const switchTab = (id: number): void => {
    setActiveTab(id);
  };

  const selectedTabList = (): Task[] => {
    switch (activeTab) {
      case 0:
        return state;
      case 1:
        return state.filter((task: Task) => task.checked);
      case 2:
        return state.filter((task: Task) => !task.checked);
      default:
        return state;
    }
  };

  const progress = () => {
    return (
      (
        (100 * state.filter((task: Task) => task.checked).length) /
        state.length
      ).toFixed(2) + "%"
    );
  };
  return (
    <div className="container">
      <div className="row justify-content-center pt-5">
        <main className="col-lg-6 border rounded pb-3">
          <header className="row justify-content-center">
            <div className="col bg-light border-bottom rounded-top">
              <h5 className="my-3">Todo List</h5>
            </div>
          </header>
          <ProgressBar progress={progress()} />
          <div className="col border rounded py-4">
            <TodoInput />
            <Tabs switchTab={switchTab} activeTab={activeTab} />
            <TodoList list={selectedTabList()} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default () => {
  return (
    <TodosProvider>
      <App />
    </TodosProvider>
  );
};
