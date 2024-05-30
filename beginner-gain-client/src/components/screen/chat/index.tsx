import {useEffect, useRef, useState} from "react";
import Modal from "react-modal";
import CloseIcon from "public/assets/svg/close-purple.svg";
import ChatBubble from "@/components/internal/make-boilerplate/ChatBubble";
import ChatingInput from "@/components/internal/make-boilerplate/ChatingInput";
import {useRouter} from "next/router";

interface IChatingHistory {
    content: string,
    isMyChat: boolean,
}


Modal.setAppElement('#__next');

const customStyles = {
    content: {
        width: '39%',
        height: '80%',
        background: 'rgba(255,255,255,0.50)',
        backdropFilter: 'blur(20px)',
        border: 0,
        borderRadius: '10px',
        padding: 0,
        marginLeft: 'auto',
        inset: '70px',
    },
    overlay: {
        backgroundColor: '0',
        background: 'rgba(0,0,0,0.40)',
    }
}

const Screen = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [chatingHistory, setChatingHistory] = useState<IChatingHistory[]>([]);
    const [currentResponse, setCurrentResponse] = useState<string>('');
    const router = useRouter();
    const socket = useRef<WebSocket | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        if (!isLoading) {
            const myNewChat = {
                content: currentResponse,
                isMyChat: false,
            }
            setChatingHistory([...chatingHistory, myNewChat])
            setCurrentResponse('');
        }
    }, [isLoading])
    useEffect(() => {
        socket.current = new WebSocket('wss://chatbot.beginergain.com/ws');

        socket.current.onopen = () => {
            console.log('WebSocket 연결이 열렸습니다.');
            socket.current?.send('안녕?');
        };

        // 메시지를 수신했을 때의 이벤트 핸들러
            socket.current.onmessage = (event) => {
                if (event.data !== 'Response completed.') {
                    setCurrentResponse(prevResponse => prevResponse + event.data);
                } else {
                    setIsLoading(false);
                }
            };

        // 연결이 닫혔을 때의 이벤트 핸들러
        socket.current.onclose = () => {
            console.log('WebSocket 연결이 닫혔습니다.');
        };

        // 컴포넌트가 언마운트되면 WebSocket 연결을 닫음
        return () => {
            socket.current?.close();
        };
    }, []);

    const handleModalClose: () => void = () => {
        router.back();
    };

    const handleSendButtonClick = async () => {
        if (inputValue !== '') {
            setIsLoading(true);
            socket.current?.send(inputValue);
            const myNewChat = {
                content: inputValue,
                isMyChat: true,
            }
            setChatingHistory([...chatingHistory, myNewChat]);
            setInputValue('');
        }
    };

    return(
        <Modal
            style={customStyles}
            isOpen={!!router.query.chat}
            onRequestClose={handleModalClose}
        >
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
                            isMychat={item.isMyChat}
                            content={item.content}/>
                    ))}
                    {isLoading &&
                        <ChatBubble content={currentResponse} isMychat={false}/>
                    }
                </div>
                <div className="p-6 sticky bottom-0 right-0 left-0 z-10">
                    <ChatingInput
                        placeholder="내용을 입력하세요"
                        value={inputValue}
                        setValue={setInputValue}
                        handleSendButtonClick={handleSendButtonClick}/>
                </div>
            </div>
        </Modal>
    );
};

export default Screen;
