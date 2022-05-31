import styles from "./Search.module.css";

const Search = ({ onChange, value, placeholder }) => {
    return (
        <input
            type="text"
            className={styles.search}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    )
}

export default Search
