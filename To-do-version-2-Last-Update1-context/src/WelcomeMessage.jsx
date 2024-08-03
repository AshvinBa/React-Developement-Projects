// import { useContext } from 'react';
// import style from './WelcomeMessage.module.css';
// import { TodoItemsContext } from './store/itemStore';


// const welcome = ({items}) => {
//     return <> {
//         <p className={style.message}>Tasks are completed.</p>
//         }
//     </>
// }
// export default welcome; 


// const welcome = () => {
//     const ContextObj = useContext(TodoItemsContext); 
//     const todoItem = ContextObj.todoItems; 

//     // const {todoItem} =  useContext(TodoItemsContext); 

//     return(
//         todoItem.length === 0 && <p className={style.message}>Tasks are completed.</p>
//     );
// }
// export default welcome; 


import { useContext } from 'react';
import style from './WelcomeMessage.module.css';
import { TodoItemsContext } from './store/itemStore';

const Welcome = () => {
  const contextObj = useContext(TodoItemsContext); 
  const todoItems = contextObj.todoItems; 

  return(
    todoItems.length === 0 && <p className={style.message}>Tasks are completed.</p>
  );
}

export default Welcome;
