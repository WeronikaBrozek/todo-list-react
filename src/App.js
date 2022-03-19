import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  { id: 1, content: "zrobić zakupy", done: true },
  { id: 2, content: "odrobić pracę domową", done: false },
];

const hideDoneTasks = false;

function App() {
  return (
    <main>
      <Header title="Lista zadań" />
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
