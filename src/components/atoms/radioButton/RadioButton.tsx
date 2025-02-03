import styles from './radioButton.module.scss';

export const RadioButton = ({ checked, onChange, name }) => {
  return (
    <label className={styles.root}>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className={styles.radio}
      />
    </label>
  );
};
