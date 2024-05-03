import CloseIcon from "public/assets/svg/close-purple.svg";
import ChatBubble from "@/components/internal/make-boilerplate/ChatBubble";
import ChatingInput from "@/components/internal/make-boilerplate/ChatingInput";
import {useState} from "react";

interface IChatingHistory {
    content: string,
    isMychat: boolean,
}

const testChatingData: IChatingHistory[] = [
    {
        content: 'recoil이랑 redux중에 뭘 써야할까?',
        isMychat: true,
    },
    {
        content: '더 탄탄한 전역관리 구조를 원하시거나, 대규모 프로젝트라면 redux를 쓰시는게 좋습니다. 보다 간단한 프로젝트는 recoil을 써보세요',
        isMychat: false,
    }
]
const Screen = ({handleModalClose} : {handleModalClose : () => void}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [chatingHistory, setChatingHistory] = useState<IChatingHistory[]>(testChatingData);

    const handleSendButtonClick = () => {
        if(inputValue !== '') {
            // 내 채팅 내용 저장
            const myNewChat = {
                content: inputValue,
                isMychat: true,
            }
            setChatingHistory([...chatingHistory, myNewChat]);
            // todo: 채팅 보내는, 답장 받는 api 연결 후 답장 history 저장
            setInputValue('');
        }
    };

    return(
        <div className="flex flex-col h-full">
            <div
                className="p-6 border-b"
                onClick={handleModalClose}>
                <CloseIcon/>
            </div>
            <div className="p-6 flex flex-col gap-9 flex-1 overflow-auto">
                {chatingHistory.map((item, index) => (
                    <ChatBubble
                        key={index}
                        isMychat={item.isMychat}
                        content={item.content} />
                ))}
            </div>
            <div className="p-6 sticky bottom-0 right-0 left-0 z-10">
                <ChatingInput
                    placeholder="내용을 입력하세요"
                    value={inputValue}
                    setValue={setInputValue}
                    handleSendButtonClick={handleSendButtonClick}/>
            </div>
        </div>
    );
};

export default Screen;