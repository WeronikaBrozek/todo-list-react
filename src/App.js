import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import UseLocalStorage from "./LocalStorage";



function App() {

  const [tasks, setTasks] = UseLocalStorage();

  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const toggleHideDoneTasks = () => {
    if (tasks.some(task => task.done === true)) {
      setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
    };
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }))
  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
};

return (
  <main>
    <Header title="Lista zadań" />
    <Section
      title="Dodaj nowe zadanie"
      container={<Form addNewTask={addNewTask} />}
    />
    <Section
      title="Lista zadań"
      filtersContent={
        <Buttons
          tasks={tasks}
          hideDoneTasks={hideDoneTasks}
          toggleHideDoneTasks={toggleHideDoneTasks}
          setAllDone={setAllDone}
        />}
      container={
        <Tasks
          tasks={tasks}
          hideDoneTasks={hideDoneTasks}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
        />}
    />
  </main>
);
}

export default App;
