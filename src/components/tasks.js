import TaskDetails from "./taskDetails";
import tasks from "../tasks.json";
import { FormText, Navbar } from "react-bootstrap";

function Tasks() {
    return ( 
        <div> 
            <Navbar></Navbar>
            <h1>Tasks List :</h1>
        <TaskDetails></TaskDetails>
        </div>
     );
}

export default Tasks;