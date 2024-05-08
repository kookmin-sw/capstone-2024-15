import React from "react";

export interface IInput {
    placeholder: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    isPassword?: boolean;
}

const Input = ({ placeholder, value, setValue, isPassword }: IInput) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return (
        <input
            type={isPassword ? "password" : "text"}
            className="w-full text-blue-300 text-xs rounded-[10px] border border-gray-200 h-16 p-5 focus:border-blue-100 placeholder-gray-200 placeholder:text-xs focus:outline-purple-200"
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}/>
    );
};

export default Input;