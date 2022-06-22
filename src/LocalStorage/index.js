import { useEffect, useState } from "react";

const useLocalStorage = () => {
    const getFromLocalStorage = () =>
        JSON.parse(localStorage.getItem("items")) || [];

    const [tasks, setTasks] = useState(getFromLocalStorage);

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(tasks));
    }, [tasks]);

    return [tasks, setTasks]
};

export default useLocalStorage;