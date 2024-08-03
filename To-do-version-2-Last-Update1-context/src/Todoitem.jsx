// import {TodoItemsContext} from "./store/itemStore"
// import { useContext } from 'react';
// import style from './Todoitem.module.css';
// import ToDoTasks from './ToDoTasks'; // Correct import path
// // import { TodoItemsContext } from "./store/itemStore";
// // import { useContext } from "react";

// const Todolist = ({  onDeleteClick  }) => {

//   const contextObj = useContext(TodoItemsContext); 
//   const todoItem = contextObj.todoItem; 

//     return (
//       <div className={style.itemsContainer}>
//         {
//           todoItem.map((item) => ( // Include index to avoid key warning
//             <ToDoTasks 
//             key = {item.task}
//             task={item.task} 
//             date={item.date} 
//             onDeleteClick = {onDeleteClick} /> // Correct prop names
//           ))
//         }
//       </div>
//     );
// };
// export default Todolist;

import { TodoItemsContext } from "./store/itemStore";
import { useContext } from 'react';
import style from './Todoitem.module.css';
import ToDoTasks from './ToDoTasks'; // Correct import path

const Todolist = (onDeleteClicks) => {

  // const {todoItems} = useContext(TodoItemsContext);

  const contextObj = useContext(TodoItemsContext); 
  const todoItems = contextObj.todoItems; 

  return (
    <div className={style.itemsContainer}>
      {todoItems.map((item, index) => ( // Include index to avoid key warning
        <ToDoTasks 
          key={index} 
          task={item.task} 
          date={item.date} 
          onDeleteClick={() => contextObj.deleteItem(item.task)} // Correct prop names and function usage
        />
      ))}
    </div>
  );
};

export default Todolist;
