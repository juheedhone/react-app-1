import styles from "./Button.module.css";

interface Props {
  children: string;

  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className={styles.Buttons}>
      {children}
    </button>
  );
};

export default Button;
