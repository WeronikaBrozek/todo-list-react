import "./style.css";

const Buttons = (props) => (
    <div className="section__buttons">
        {props.tasks.length > 0 && (
            <>
                <button className="section__button">{props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="section__button"
                    disabled={props.tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </ >
        )}
    </div>
);

export default Buttons;