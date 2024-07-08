import styles from './checkbox.module.scss';

const Checkbox = ({ checked, onChange }) => {
    return (
        <label className={`${styles.root} ${checked && styles.checked}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className={styles.checkbox}
            />
        </label>
    );
};

export default Checkbox;
