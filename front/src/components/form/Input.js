import styles from './Input.module.css';

function Input({ type, text, name, placeholder, onChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default Input;