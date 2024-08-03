// import style from './Addtodo.module.css';
// import { MdAddBox } from "react-icons/md";
// // import { useState, useRef } from "react";
// import { useRef } from "react";

// function AddToDo({ onNewItem }) {
//   // const [todoName, setTodoName] = useState('');
//   // const [dueDate, setdueDate] = useState('');

//   const todoNameElement = useRef();
//   const todoDateElement = useRef();


//   // const handleNameChange = (event) => {
//   //   setTodoName(event.target.value);
//   //   noOfUpdates.current += 1;    // useRef
//   // }

//   // const handleDateChange = (event) => {
//   //   setdueDate(event.target.value);
//   //   // setdueDate("");

//   //   console.log(`The Number of Updates are: ${noOfUpdates.current}`);    // useRef

//   // }

//   const HandleOnButtonClicked = (event) => {
//     event.preventDefault();
//     const todoName = todoNameElement.current.value;
//     const todoDate = todoDateElement.current.value;
//     todoNameElement.current.value = "";
//     todoDateElement.current.value = "";
//     onNewItem(todoName, todoDate);

//     // setTodoName("");
//     // setdueDate("");
//   };

//   return (
//     <div className="container">

//       <form className="row align-items-center justify-content-center my-row" onSubmit={HandleOnButtonClicked} >

//           <div className="col-6 mb-3"> 
//           <input type="text" className="form-control" ref={todoNameElement} placeholder='Enter Task'/>
//           </div>

//           <div className="col-4 mb-3">
//           <input className="form-control" ref={todoDateElement} type="date" /></div>

//           <div className="col-2 mb-3"><button type="submit" className={`btn btn-success my-btn ${style.submit}`} >
//           <MdAddBox />
          
//         </button></div>

//       </form>

//     </div>
//   );
// }
// export default AddToDo;


import style from './Addtodo.module.css';
import { MdAddBox } from "react-icons/md";
import { useRef } from "react";

function AddToDo({ onNewItem }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleOnButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onNewItem(todoName, todoDate);
  };

  return (
    <div className="container">
      <form className="row align-items-center justify-content-center my-row" onSubmit={handleOnButtonClicked}>
        <div className="col-6 mb-3">
          <input type="text" className="form-control" ref={todoNameElement} placeholder='Enter Task'/>
        </div>
        <div className="col-4 mb-3">
          <input className="form-control" ref={todoDateElement} type="date" />
        </div>
        <div className="col-2 mb-3">
          <button type="submit" className={`btn btn-success my-btn ${style.submit}`}>
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
