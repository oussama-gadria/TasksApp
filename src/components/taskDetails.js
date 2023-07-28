import {
  Alert,
  Button,
  Form,
  OverlayTrigger,
  Table,
  Tooltip,
} from "react-bootstrap";
import Tasks from "../tasks.json";
import { useState } from "react";

function TaskDetails(props) {
  const [tasks, setTasks] = useState(Tasks);
  const [deletedId, setDeletedId] = useState("");
  const [updateTask, setupdateTask] = useState({});
  const [statusAlertAdd, setstatusAlertAdd] = useState(false);
  const [title, setTitle] = useState("");
  const [statusAlert, setstatusAlert] = useState(false);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [updatedDate, setUpdatedDate] = useState(new Date());
  const [updatedtitle, setUpdatedTitle] = useState("");
  const [updateddescription, setUpdatedDescription] = useState("");
  const [updatedstatus, setUpdatedStatus] = useState("");

  //saving the id to delete it 
  const saveId = (id) => {
    setDeletedId(id);
  };


  //add task
  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      status,
      created_at: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
    setStatus("");
    setstatusAlertAdd(true);
  };

 //deleted Task 
  const deleteTask = () => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === deletedId) {
        tasks.splice(i, 1);
        setDeletedId("");
      }
    }
  };
  

  //mapping the update input
  const taskToUpdate = (t) => {
    setupdateTask(t);
    setUpdatedTitle(t.title);
    setUpdatedDescription(t.description);
    setUpdatedStatus(t.status);
    setUpdatedDate(t.created_at);
  };

 //edit function
  const editTask = () => {
    const newTask = {
      id: updateTask.id,
      title: updatedtitle !== "" ? updatedtitle : updateTask.title,
      description:
        updateddescription !== "" ? updateddescription : updateTask.description,
      status: updatedstatus !== "" ? updatedstatus : updateTask.status,
      created_at: updatedstatus !== "" ? updatedDate : updateTask.created_at,
    };

    const updatedTasks = tasks.map((task) => {
      if (task.id === updateTask.id) {
        return newTask;
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
    setstatusAlert(true);
    setupdateTask({});
  };

  return (
    <div>
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
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.created_at}</td>
              <td>{task.status}</td>
              <td>
                <Button variant="success" onClick={() => taskToUpdate(task)}>
                  Edit
                </Button>{" "}
                <button
                  type="button"
                  class="btn btn-danger"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => saveId(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Are you sure to Delete the task with id = {deletedId}{" "}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={deleteTask}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1>Add Task:</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </Form.Group>
        {statusAlertAdd && <Alert
          className="form-group"
          variant="success"
          style={{ marginTop: "-13px" }}
        >
          <div
            className="form-icon-wrapper  text-success"
            style={{
              marginTop: "-11px",
              marginBottom: "-13px",
            }}
          >
           task added !
          </div>
        </Alert>
        }
        <Button variant="primary" type="button" onClick={addTask}>
          Add
        </Button>
      </Form>

      <h1>Edit Task:</h1>
      <Form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            value={updatedtitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
        </div>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            value={updateddescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Status"
            value={updatedstatus}
            onChange={(e) => setUpdatedStatus(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Created at</Form.Label>
          <Form.Control
            type="date"
            value={updatedDate}
            onChange={(e) => setUpdatedDate(e.target.value)}
          />
        </Form.Group>
       {statusAlert && <Alert
          className="form-group"
          variant="success"
          style={{ marginTop: "-13px" }}
        >
          <div
            className="form-icon-wrapper  text-success"
            style={{
              marginTop: "-11px",
              marginBottom: "-13px",
            }}
          >
           task updated !
          </div>
        </Alert>
        }
        <Button variant="primary" type="button" onClick={editTask}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default TaskDetails;
