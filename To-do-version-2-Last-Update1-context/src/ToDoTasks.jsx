import { MdDelete } from "react-icons/md";
import Style from './ToDoTasks.module.css';

function ToDoTasks({ task, date , onDeleteClick }) { // Correct prop names
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center my-row">
        <div  className="col-6 mb-3" >{task}</div>
        <div  className="col-4 mb-3" >{date}</div>
        <div className="col-2 mb-3">
          <button type="button" 
          className="btn btn-danger my-btn buttons"
          onClick={() =>
            onDeleteClick(task)
          }
          > <MdDelete /> </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoTasks;
