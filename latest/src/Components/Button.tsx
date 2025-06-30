import { useState } from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void; // optional custom click handler
  initialColor?: string; // optional initial color
};

const colorList = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

const Button = ({ text, onClick, initialColor = "primary" }: ButtonProps) => {
  // Find the index of the initialColor or default to 0
  const initialIndex = colorList.indexOf(initialColor);
  const [colorIndex, setColorIndex] = useState(
    initialIndex !== -1 ? initialIndex : 0
  );

  const handleClick = () => {
    console.log("clicked");
    if (onClick) onClick(); // Call parent's handler if provided
    setColorIndex((prevIndex) => (prevIndex + 1) % colorList.length);
  };

  return (
    <button
      type="button"
      className={`btn btn-${colorList[colorIndex]}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
