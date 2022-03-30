import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";


function App() {

  const [hideDoneTasks, setHideDoneTasks] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "zrobić zakupy", done: true },
    { id: 2, content: "odrobić pracę domową", done: false },
  ]);

  const toggleHideDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  }

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <main>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        container={<Form />}
      />
      <Section
        title="Lista zadań"
        filtersContent={
          <Buttons
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            toggleHideDoneTasks={toggleHideDoneTasks}
          />}
        container={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} removeTask={removeTask} />}
      />
    </main>
  );
}

export default App;
