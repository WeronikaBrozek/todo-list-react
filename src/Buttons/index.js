import { Filters, Button } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks, setAllDone }) => (
    <Filters>
        {tasks.length > 0 && (
            <>
                <Button
                    onClick={toggleHideDoneTasks}
                >
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </ >
        )}
    </Filters>
);

export default Buttons;