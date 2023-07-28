import TaskDetails from "./taskDetails";
import Footer from "./Footer"; 
import Navbar from "./Navbar";

function Tasks() {
    return ( 
        <div> 
        <Navbar></Navbar>
        <h1>Tasks List :</h1>
        <TaskDetails></TaskDetails>
        <Footer></Footer>
        </div>
     );
}

export default Tasks;