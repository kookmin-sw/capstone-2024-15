import React, {Dispatch, SetStateAction} from "react";

export interface IInput {
    placeholder: string;
    value: string;
    name?: string;
    handleInputChange?:  React.ChangeEventHandler<HTMLInputElement>;
    isPassword?: boolean;
    setValue?: Dispatch<SetStateAction<any>>;
}

const Input = ({ placeholder, value, name, handleInputChange, isPassword }: IInput) => {
    return (
        <input
            type={isPassword ? "password" : "text"}
            className="w-full text-blue-300 text-xs rounded-[10px] border border-gray-200 h-16 p-5 focus:border-blue-100 placeholder-gray-200 placeholder:text-xs focus:outline-purple-200"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleInputChange}/>
    );
};

export default Input;