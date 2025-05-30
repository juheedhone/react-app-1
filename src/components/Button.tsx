interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color = "secondary" }: Props) => {
  return (
    <button type="button" onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
