function ModalDelete(props) {
    const deleteTask = (taskId) => {
      const myTasks = props.tasks.filter((task) => task.id !== taskId);
      props.setTasks(myTasks);
    };
    return ( 
    <>
     <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure to Delete the task with id = {props.deletedId}{" "}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={()=>{deleteTask(props.deletedId)}}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </> );
}

export default ModalDelete;