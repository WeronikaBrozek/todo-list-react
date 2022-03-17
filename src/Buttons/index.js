import "./style.css";

const Buttons = (props) => {
    return props.tasks.lenght > 0 && (
        <span className="section__buttons">
            <button className="section__button">{props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button 
            className="section__button"
            disabled={props.tasks.every(({ done }) => done)}
            >
            Ukończ wszystkie
            </button>
        </span>
    )
};

export default Buttons;