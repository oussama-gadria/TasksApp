import SubmitButton from "../layouts/SubmitButton";
import InputForm from "../layouts/InputForm";
import ReturnButton from "../layouts/ReturnButton";

let defaultTask = {
    id: null,
    title: "",
    description: "",
    status: null,
    createdDate: null,
};

function EditTask({inputLabels, updateTask, tasks, setTasks, setUpdateTask}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedTasks = tasks.map((task) =>
            task.id === updateTask.id ? updateTask : task
        );
        setTasks(updatedTasks);
        setUpdateTask(defaultTask);
    };
    return (
        <>
            <h4 className="mt-4">Edit Task:</h4>
            <form onSubmit={handleSubmit}>
                {inputLabels.map((inputLabel) => (
                    <InputForm
                        updateTask={updateTask}
                        key={inputLabel}
                        input={inputLabel}
                        valueTask={updateTask[inputLabel]}
                        setEditTaskForm={setUpdateTask}
                    />
                ))}
                <SubmitButton/>
                <ReturnButton/>
            </form>
        </>
    );
}

export default EditTask;
