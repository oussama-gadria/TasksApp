import ButtonForm from "../layouts/ButtonForm";
import InputForm from "../layouts/InputForm";

var defaultTask = {
  id: null,
  title: "",
  description: "",
  status: null,
  createdDate: null,
};

function EditTask({ updateTask, tasks, setTasks, setUpdateTask }) {
  const inputs = ["title", "description", "status"];
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
        {inputs.map((input) => (
          <InputForm
          updateTask={updateTask}
            key={input}
            input={input}
            valueTask={updateTask[input]}
            setEditTaskForm={setUpdateTask}
          />
        ))}
        <ButtonForm />
      </form>
    </>
  );
}

export default EditTask;