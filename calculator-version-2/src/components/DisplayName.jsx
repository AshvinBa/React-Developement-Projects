import styles from './DisplayName.module.css'; // Corrected import name to "styles"

const Display = ({ displayValue }) => {
    return (
        <input 
            className={styles.display} 
            type="text" 
            value={displayValue} 
            readOnly // Made read-only to prevent manual input
        /> 
    );
};

export default Display;
