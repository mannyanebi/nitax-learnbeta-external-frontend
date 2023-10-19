import React from "react";

type IInput = {
  type: "text" | "file" | "date";
  value: string;
  name: string;
  id?: string;
  placeholder: string;
  label?: string;
  left_icon?: React.ReactNode;
  right_icon?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
};

const Input: React.FC<IInput> = ({
  type,
  id,
  value,
  name,
  placeholder,
  label,
  left_icon,
  right_icon,
  onChange,
  onBlur,
}) => {
  return (
    <div className="w-full  py-1 overflow-hidden bg-[#ffffff]">
      {label && (
        <div className="w-full block bg-[#ffffff]">
          <p className=" text-[16px] text-[#555555] font-[500]">{label}</p>
        </div>
      )}
      <div className="border-[2px] border-[#555555] h-[60px] overflow-hidden w-full flex rounded-md px-3">
        {left_icon && (
          <div className="h-full w-[10%] bg-[trasparent] bg-[#ffffff]">
            {left_icon}
          </div>
        )}
        <div className="h-full w-full flex-1 overflow-hidden ">
          <input
            id={id || name}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            className="placeholder:text-[#555555] placeholder:text-[16px] text-[16px] w-full outline-none h-full"
          />
        </div>
        {right_icon && (
          <div className="h-full w-[10%] bg-[#E2E2E2]">{right_icon}</div>
        )}
      </div>
    </div>
  );
};

export default Input;
