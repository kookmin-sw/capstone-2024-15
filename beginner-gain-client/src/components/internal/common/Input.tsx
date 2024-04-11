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
            className="text-gray-200"
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}/>
    );
};

export default Input;