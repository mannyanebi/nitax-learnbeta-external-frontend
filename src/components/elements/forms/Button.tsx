import React from "react";

type IButton = {
  title: string;
  type: "button" | "submit";
  bg?: string;
  text?: string;
  h_bg?: string;
  h_text?: string;
  onClick: () => void;
};

const Button: React.FC<IButton> = ({
  title,
  type,
  bg,
  text,
  h_bg,
  h_text,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[${bg}] text-[${text}] hover:bg-[${h_bg}] hover:text-[white]  w-full py-3 rounded-full hover:shadow-sm text-center transition font-semibold duration-75 delay-[40ms] ease-linear
      `}
    >
      {title}
    </button>
  );
};

export default Button;
