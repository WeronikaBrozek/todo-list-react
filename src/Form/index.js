import React, {useState} from "react";
import "./style.css";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return(
        <form className="form" onSubmit={onFormSubmit}>
            <input 
            value={newTaskContent}
            type="text" required
            className="form__input" 
            autoFocus placeholder="Co jest do zrobienia?" 
            onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;