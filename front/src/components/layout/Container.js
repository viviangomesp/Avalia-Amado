import styles from './Container.module.css';

// Container simples para envolver outros componentes
function Container(props) {
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}
export default Container;