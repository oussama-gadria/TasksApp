import TaskDetails from "./TaskDetails";
import Footer from "./Footer";
import EditTask from "./EditTask";
import {useState} from "react";
import Task from "../tasks.json";
import ModalDelete from "../layouts/ModalDelete";
import {Route, Routes} from "react-router-dom";
import MainNav from "./MainNav";
import AddTask from "./AddTask";

const inputLabels = ["title", "description", "status"]

const Tasks = () => {

    const [tasks, setTasks] = useState(Task);
    const [deletedId, setDeletedId] = useState("");
    const [updateTask, setUpdateTask] = useState({
        id: null, title: "", description: "", status: null, createdDate: null,
    });
    const updateUserTask = (type, value) => {
        setUpdateTask({
            ...updateTask,
            id: updateTask.title !== "" ? updateTask.id : tasks.length + 1,
            created_at: updateTask.title !== "" ? updateTask.created_at : new Date().toISOString(),
            [type]: value,
        });
    };
    const onDelete = (id) => {
        setDeletedId(id);
    };
    const onEdit = (id) => {
        const task = tasks.filter((task) => task.id === id);
        setUpdateTask(task[0]);
    };
    return (<>
        <MainNav/>
        <Routes>
            <Route
                path="/"
                element={<TaskDetails
                    tasks={tasks}
                    setTasks={setTasks}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />}
            />
            <Route
                path="/addTask"
                element={<AddTask
                    inputLabels={inputLabels}
                    tasks={tasks}
                    setTasks={setTasks}
                    setUpdateTask={updateUserTask}
                />}
            ></Route>
            <Route
                path="/editTask"
                element={<EditTask
                    inputLabels={inputLabels}
                    tasks={tasks}
                    setTasks={setTasks}
                    deletedId={deletedId}
                    updateTask={updateTask}
                    setUpdateTask={updateUserTask}
                />}
            ></Route>
        </Routes>
        <ModalDelete tasks={tasks} deletedId={deletedId} setTasks={setTasks}/>
        <Footer/>
    </>);
};
export default Tasks;
