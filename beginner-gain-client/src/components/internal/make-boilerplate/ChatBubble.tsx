interface IChatBubble {
    isMychat?: boolean,
    isLoading?: boolean,
    content?: string,
}

const ChatBubble = ({ isMychat, isLoading, content } : IChatBubble) => {
    return(
        <div className="flex gap-4">
            {!isMychat &&
                <div className="rounded-full bg-purple-200 min-w-9 h-9"></div>
            }
            <div className={"min-h-9 flex items-center bg-white px-8 py-2 rounded-lg" + (isMychat ? " ml-auto" : "")}>
                {isLoading ?
                    <div className="flex gap-2">
                        <div className="rounded-full bg-purple-200 min-w-2 h-2"></div>
                        <div className="rounded-full bg-purple-200 min-w-2 h-2"></div>
                        <div className="rounded-full bg-purple-200 min-w-2 h-2"></div>
                    </div> :
                    content}
            </div>
        </div>
    );
};

export default ChatBubble;