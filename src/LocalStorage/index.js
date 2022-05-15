import { useEffect, useState } from "react";

const UseLocalStorage = () => {
    const getFromLocalStorage = () => {
        const localTasks = localStorage.getItem("tasks");
        
        return localTasks ? JSON.parse(localTasks) : [];
    };

    const [tasks, setTasks] = useState(getFromLocalStorage);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return [tasks, setTasks]
};

export default UseLocalStorage;