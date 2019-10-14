import React from "react";
import "./App.css";
import { ProgressBar } from "./components/ProgressBar";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { Tabs } from "./components/Tabs";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="row justify-content-center pt-5">
        <main className="col-lg-6 border rounded pb-3">
          <header className="row justify-content-center">
            <div className="col bg-light border-bottom rounded-top">
              <h5 className="my-3">Todo List</h5>
            </div>
          </header>
          <ProgressBar />
          <div className="col border rounded py-4">
            <TodoInput />
            <Tabs />

            <TodoList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
