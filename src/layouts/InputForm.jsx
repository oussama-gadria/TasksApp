import { Form } from "react-bootstrap";
function InputForm({input,valueTask,updateTask,setEditTaskForm,setAddTaskForm}) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>{input}</Form.Label>
          <Form.Control
            type="text"
            placeholder={input}
            value={valueTask}
            onChange={updateTask.title !== "" ?(e) => setEditTaskForm(input, e.target.value) :(e) => setAddTaskForm(input, e.target.value) }
          />
        </Form.Group>
      </Form>
    </>
  );
}
export default InputForm;
