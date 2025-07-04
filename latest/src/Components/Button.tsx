type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={() => {
        console.log(`${text} button clicked`); // ✅ confirm click
        if (onClick) onClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
