import CloseIcon from "public/assets/svg/close-purple.svg";
import ChatBubble from "@/components/internal/make-boilerplate/ChatBubble";
import ChatingInput from "@/components/internal/make-boilerplate/ChatingInput";
import {useState} from "react";

const Screen = ( handleModalClose : (() => void)) => {
    const [inputValue, setInputValue] = useState<string>('');
    return(
        <div className="flex flex-col h-full">
            <div
                className="p-6 border-b"
                onClick={handleModalClose}>
                <CloseIcon/>
            </div>
            <div className="p-6 flex flex-col gap-9 flex-1">
                <ChatBubble isMychat={false} isLoading={false} content="프로젝트 규모가 어느정도야?" />
                <ChatBubble isMychat={true} isLoading={false} content="동아리에서 하는 토이프로젝트 정도야!" />
                <ChatBubble isMychat={false} isLoading={true} content="동아리에서 하는 토이프로젝트 정도야!" />
            </div>
            <div className="p-6">
                <ChatingInput placeholder="내용을 입력하세요" value={inputValue} setValue={setInputValue} />
            </div>
        </div>
    );
};

export default Screen;