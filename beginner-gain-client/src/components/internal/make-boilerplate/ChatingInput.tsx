import React from "react";
import SendIcon from "public/assets/svg/send-icon.svg";

export interface IChatingInput {
    placeholder: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const ChatingInput = ({ placeholder, value, setValue }: IChatingInput) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return (
        <div className="relative">
            <input
                className="w-full text-white placeholder:text-xxs placeholder-white/60 p-5 border-white border bg-inherit rounded-lg focus:outline-none"
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}/>
            <div className="absolute top-1/2 right-5 -translate-y-1/2">
                <SendIcon />
            </div>
        </div>
    );
};

export default ChatingInput;