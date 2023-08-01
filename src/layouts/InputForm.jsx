import { Form } from "react-bootstrap";
function InputForm(props) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>{props.input}</Form.Label>
          <Form.Control
            type="text"
            placeholder={props.input}
            value={props.valueTask}
            onChange={props.updateTask.title !== "" ?(e) => props.setEditTaskForm(props.input, e.target.value) :(e) => props.setAddTaskForm(props.input, e.target.value) }
          />
        </Form.Group>
      </Form>
    </>
  );
}
export default InputForm;
