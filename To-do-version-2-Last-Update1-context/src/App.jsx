import { TodoItemsContext } from "./store/itemStore";
import style from './App.module.css';
import Todolist from './Todoitem'; // Corrected import path
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Name from './AppName';
import AddToDo from './Addtodo';
import Welcome from './WelcomeMessage';
import { useState } from 'react';

function App() {
  const [todoItems, setToDoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoItems, { task: itemName, date: itemDueDate }];
    setToDoItems(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.task !== todoItemName);
    setToDoItems(newTodoItems); // Repaint whole To-Do-List
  };

  return (
    <TodoItemsContext.Provider 
    value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}>
      <center className="todo-container">
        <Name />
        <AddToDo onNewItem={addNewItem} />
        <Welcome />
        <Todolist className={style.fill} />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
