// import { useState } from "react";

// import Item from "./items.jsx"

// const FoodList = ({ items }) => {
//     const [foodItem, setFoodItem] = useState([]);
//     let onBuyButton = (item, event) => {
//         let newItem = [...foodItem, item];
//         setFoodItem(newItem);
//     }

//     return
//     (
//         <ul className="list-group">
//         {items.map((item) => (
//               <Item 
//               key={item} 
//               foodItem = {item}
//               bought={activeItem.includes(item)}
//               handleBuyButton = 
//                   {(event) => onBuyButton(item , event)}>   
//               </Item>
//         ))}
//       </ul>
//     );
// }
// export default FoodList;

import { useState } from "react";
import Item from "./items";

const FoodList = ({items}) => {  
  const [activeItem , setActiveItem] = useState([]);
  let onBuyButton = (item , event) =>
    {
      let newItem = [...activeItem , item];
      setActiveItem(newItem);
    };

    return (
        <ul className="list-group">
        {items.map((item) => (
              <Item 
              key={item} 
              foodItem = {item}
              bought={activeItem.includes(item)}
              handleBuyButton = 
                  {(event) => onBuyButton(item , event)}>   
              </Item>
        ))}
      </ul>
    );
};

export default FoodList; 




