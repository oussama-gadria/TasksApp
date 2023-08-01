import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
function TaskDetails(props) {
  return (
    <>
      <h4 className="mt-4">Tasks List:</h4>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Description</th>
            <th>created At</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.created_at}</td>
              <td>{task.status}</td>
              <td>
                <Link to='/editTask'>
                <Button variant="success" onClick={() => props.onEdit(task.id)} className="mr-1">Edit</Button>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => props.onDelete(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to='/addTask'>
      <Button variant="primary" >Add Task</Button>
      </Link>
    </>
  );
}

export default TaskDetails;
