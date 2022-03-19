import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  { id: 1, content: "zrobić zakupy", done: true },
  { id: 2, content: "odrobić pracę domową", done: false },
];

const hideDoneTasks = false;

function App() {
  return (
    <main>
      <header>
        <h1 className="header__title">Lista zadań</h1>
      </header>
      <Section
        title="Dodaj nowe zadanie"
        container={<Form />}
      />
      <Section
        title="Lista zadań"
        filtersContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        container={<Tasks
          tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </main>
  );
}

export default App;
