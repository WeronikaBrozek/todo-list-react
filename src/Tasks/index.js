import "./style.css";

const Tasks = (props) => (
    <ul className="section__list">
        {props.tasks.map(task => (
            <li key={task.id}
                className={`section__listItem${(task.done && props.hideDoneTasks) ? " section__listItem--hidden" : ""}`}
            >
                <button className="section__itemButtons section__itemButtons--status">{task.done ? "✔" : ""}
                </button>
                <span className={`section__content ${task.done ? "section__content--done" : ""}`}>
                    {task.content}
                </span>
                <button className="section__itemButtons">🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;