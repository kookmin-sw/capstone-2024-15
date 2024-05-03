import Bubble from "../../../../public/assets/svg/bubble.svg";
import ChatIcon from "../../../../public/assets/svg/chat.svg";
import Link from "next/link";

const ChatbotButton = () => {
    return (
        <div className="flex gap-6 items-center">
            <div className="relative">
                <p className="absolute top-4 left-4 text-black">
                    선택이 어렵다면 챗봇과 대화해보세요!
                </p>
                <Bubble/>
            </div>
            <Link
                className="cursor-pointer"
                href="/make-boilerplate/1?chat=true"
            >
                <ChatIcon/>
            </Link>
        </div>
    );
};

export default ChatbotButton;