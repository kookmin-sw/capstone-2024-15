import Bubble from "public/assets/svg/bubble.svg";
import ChatIcon from "public/assets/svg/chat-icon.svg";
import Link from "next/link";

const ChatbotButton = ({ query }: { query : string | string[] }) => {
    return (
        <div className="flex items-center z-0">
            <div className="relative -top-12 drop-shadow-md flex">
                <div className="absolute top-[calc(50%-10px)] left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-nowrap text-xs">
                    <p>선택이 어렵다면</p>
                   <p>챗봇과 대화해보세요!</p>
                </div>
                <div className="w-[14vw]">
                    <Bubble width="100%"/>
                </div>
            </div>
            <Link
                className="cursor-pointer"
                href={`/make-boilerplate/${query}?chat=true`}
            >
                <ChatIcon/>
            </Link>
        </div>
    );
};

export default ChatbotButton;