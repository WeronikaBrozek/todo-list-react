import React, {useState} from "react";
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

    return(
        <ListForm onSubmit={onFormSubmit}>
            <Input 
            value={newTaskContent}
            type="text" required
            autoFocus placeholder="Co jest do zrobienia?" 
            onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </ListForm>
    );
};

export default Form;