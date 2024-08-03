import style from "./items.module.css"

const Item = ({foodItem ,bought, handleBuyButton}) => {
    return (
        <li className={`${style["kg-coding"]} ${bought && "active"}`}>
            <span className={`${style["kg-span"]}`}>{foodItem}</span>
            <button  className={`${style.button} `} 
            onClick={handleBuyButton}type="button">Buy</button>
        </li>
    );
};

export default Item;