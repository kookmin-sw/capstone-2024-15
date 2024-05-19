import Bubble from "../../../../public/assets/svg/bubble.svg";
import ChatIcon from "../../../../public/assets/svg/chat.svg";
import Link from "next/link";

const ChatbotButton = ({ query }: { query : string | string[] }) => {
    return (
        <div className="flex gap-6 items-center">
            <div className="relative">
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-nowrap">
                    선택이 어렵다면 챗봇과 대화해보세요!
                </p>
                <Bubble/>
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