import React from "react";

type ButtonProps = {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonColors?: string; // optional, defaults to "primary"
};

const Button = ({ text, onClick, buttonColors = "primary" }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`Button "${text}" clicked`);
    if (onClick) onClick(e);
  };

  return (
    <button
      type="button"
      className={`btn btn-${buttonColors}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
