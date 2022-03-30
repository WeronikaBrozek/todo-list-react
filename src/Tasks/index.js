import "./style.css";

const Tasks = ({tasks, hideDoneTasks, removeTask}) => (
    <ul className="list">
        {tasks.map(task => (
            <li key={task.id}
                className={`list__element${(task.done && hideDoneTasks) ? " list__element--hidden" : ""}`}
            >
                <button className="list__buttons list__buttons--status">{task.done ? "✔" : ""}
                </button>
                <span className={`list__content ${task.done ? "list__content--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    className="list__buttons"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;