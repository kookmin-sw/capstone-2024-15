import React from "react";
import SendIcon from "public/assets/svg/send-icon.svg";

export interface IChatingInput {
    placeholder: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    handleSendButtonClick: () => void;
}

const ChatingInput = ({ placeholder, value, setValue, handleSendButtonClick }: IChatingInput) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    // enter 누르면 메시지 전달할 수 있도록 하는 이벤트 함수
    const handleActiveEnter = (e : React.KeyboardEvent<HTMLInputElement>) => {
        // todo: 한글만 두번 입력되는 오류 해결하기
        if(value !== '' && e.key == "Enter") {
            handleSendButtonClick();
        }
    };
    return (
        <div className="relative">
            <input
                className="w-full text-white placeholder:text-xxs placeholder-white/60 p-5 border-white border bg-inherit rounded-lg focus:outline-none"
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}
                onKeyDown={(e) => handleActiveEnter(e)}/>
            <div
                className="absolute top-1/2 right-5 -translate-y-1/2"
                onClick={handleSendButtonClick}>
                <SendIcon />
            </div>
        </div>
    );
};

export default ChatingInput;