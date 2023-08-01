import {useState} from "react";
import InputForm from "../layouts/InputForm";
import SubmitButton from "../layouts/SubmitButton";
import ReturnButton from "../layouts/ReturnButton";

let defaultTask = {
    id: null,
    title: "",
    description: "",
    status: null,
    createdDate: null,
};

function AddTask({updateTask, tasks, setTasks, setUpdateTask}) {
    const [userTask, setUserTask] = useState(defaultTask);
    const inputs = ["title", "description", "status"];
    const handleSubmit = (event) => {
        event.preventDefault();
        setTasks([...tasks, userTask]);
        setUserTask(defaultTask);
    };
    const setAddTaskForm = (type, value) => {
        setUserTask({
            ...userTask,
            id: tasks.length + 1,
            created_at: new Date().toISOString(),
            [type]: value,
        });
    };

    return (
        <>
            <h4 className="mt-4">Add Task</h4>
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <InputForm key={input} input={input} setAddTaskForm={setAddTaskForm} updateTask={updateTask}/>
                ))}
                <SubmitButton/>
                <ReturnButton/>
            </form>
        </>
    );
}

export default AddTask;