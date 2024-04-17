import React from "react";

export interface IInput {
    placeholder: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ placeholder, value, setValue }: IInput) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return (
        <input
            className="w-full text-blue-300 text-xs rounded-[10px] border border-gray-200 h-16 p-5 focus:border-blue-100 placeholder-gray-200 placeholder:text-xs"
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}/>
    );
};

export default Input;