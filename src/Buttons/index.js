import "./style.css";

const Buttons = (props) => (
    <div className="filters">
        {props.tasks.length > 0 && (
            <>
                <button className="filters__button">{props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="filters__button"
                    disabled={props.tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </ >
        )}
    </div>
);

export default Buttons;