import "./style.css";

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li key={task.id}
                className={`list__element${(task.done && props.hideDoneTasks) ? " list__element--hidden" : ""}`}
            >
                <button className="list__buttons list__buttons--status">{task.done ? "✔" : ""}
                </button>
                <span className={`list__content ${task.done ? "list__content--done" : ""}`}>
                    {task.content}
                </span>
                <button className="list__buttons">🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;