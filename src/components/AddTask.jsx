import {useEffect, useState} from "react";
import InputForm from "../layouts/InputForm";
import SubmitButton from "../layouts/SubmitButton";
import ReturnButton from "../layouts/ReturnButton";
import {Form} from "react-bootstrap";

let defaultTask = {
    id: null, title: "", description: "", status: null, createdDate: null,
};

function AddTask({inputLabels, tasks, setTasks, setUpdateTask}) {
    const [userTask, setUserTask] = useState(defaultTask);
    const handleSubmit = (event) => {
        event.preventDefault();
        setTasks([...tasks, userTask]);
        setUserTask(defaultTask);
    };

    useEffect(() => {
    }, []);
    const setAddTaskForm = (type, value) => {
        setUserTask({
            ...userTask, id: tasks.length + 1, created_at: new Date().toISOString(), [type]: value,
        });
    };

    return (<>
        <h4 className="mt-4">Add Task</h4>
        <form onSubmit={handleSubmit}>
            {inputLabels.map(inputLabel => <InputForm
                key={inputLabel}
                input={inputLabel}
                setAddTaskForm={setAddTaskForm}
            />)}
            <SubmitButton/>
            <ReturnButton/>
        </form>
    </>);
}

export default AddTask;