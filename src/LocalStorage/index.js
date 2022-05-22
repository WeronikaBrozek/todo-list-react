import { useEffect, useState } from "react";

const useLocalStorage = () => {
    const getFromLocalStorage = () =>
        JSON.parse(localStorage.getItem("tasks")) || [];

    const [tasks, setTasks] = useState(getFromLocalStorage);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return [tasks, setTasks]
};

export default useLocalStorage;