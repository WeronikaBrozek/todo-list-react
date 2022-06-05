import React, {useState, useRef} from "react";
import {ListForm, Input, Button} from "./styled"

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

    const inputRef = useRef(null);

    return(
        <ListForm onSubmit={onFormSubmit}>
            <Input 
            value={newTaskContent}
            type="text" required
            autoFocus placeholder="Co jest do zrobienia?" 
            input ref={inputRef}
            onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <Button onClick={ () => inputRef.current.focus()}>Dodaj zadanie</Button>
        </ListForm>
    );
};

export default Form;