import style from "./App.module.css";

const Input = ({ handleOnKeyDown }) => {
    return (
        <input
            type="text"
            placeholder="Enter Food"
            className={style.input1}
            onKeyDown={handleOnKeyDown}
        />
    );
}
export default Input;

