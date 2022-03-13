import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
  { id: 1, content: "zrobić zakupy", done: true },
  { id: 2, content: "odrobić pracę domową", done: false },
];

const hideDoneTasks = false;

function App() {
  return (
    <main>
      <header className="header">
        <h1 className="header__title">Lista zadań</h1>
      </header>
      <section className="section">
        <h2 className="section__header">Dodaj nowe zadanie</h2>
        <Form />
      </section>

      <section className="section">
        <div className="section__filters">
          <h2 className="section__header--noBorder">Lista zadań</h2>
          <Buttons />
        </div>
        <div className="section__container">
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>
        </div>
      </section>
    </main>
  );
}

export default App;
