import React from "react";

interface IUnderlineInput {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const UnderlineInput = ({ value, setValue}: IUnderlineInput) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return (
        <input
        className="border-b-4 bg-inherit h-14 p-2 focus:outline-none focus:ring-white text-white text-md text-center"
        value={value}
        onChange={handleInputChange}/>
    );
};

export default UnderlineInput;