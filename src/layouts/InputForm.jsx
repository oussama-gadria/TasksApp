import {Form} from "react-bootstrap";
import {useEffect, useState} from "react";


const InputForm = ({input, valueTask, updateTask = '', setEditTaskForm, setAddTaskForm}) => {

    const [inputTask, setInputTask] = useState('')


    useEffect(() => {
        setInputTask(updateTask)
    }, []);

    return (<>

        <Form.Group className="mb-3">
            <Form.Label>{input}</Form.Label>
            <Form.Control
                type="text"
                placeholder={input}
                value={valueTask}
                onChange={inputTask !== '' ? (e) => setEditTaskForm(input, e.target.value) : (e) => setAddTaskForm(input, e.target.value)}
            />
        </Form.Group>
    </>);
}

export default InputForm;
