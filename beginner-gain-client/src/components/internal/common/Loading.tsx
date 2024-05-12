import styled from "styled-components";

const Loading = ({text} : { text? : string }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 bg-blue-300 h-[calc(100vh-54px-4rem)]">
            <CircleContainer>
                <Circle></Circle>
                <Circle></Circle>
                <Circle></Circle>
            </CircleContainer>
            <p className="text-md font-semibold text-purple-100">{text}</p>
        </div>
    );
};

const CircleContainer = styled.div`
    display: flex;
    gap: 2rem;
    
    // loading animation
    & span {
        animation: loading 1s 0s linear infinite;
    }
    & span:nth-child(1) {
        animation-delay: 0s;
    }
    & span:nth-child(2) {
        animation-delay: 0.2s;
    }
    & span:nth-child(3) {
        animation-delay: 0.4s;
    }
    
    @keyframes loading {
        0%,
        100% {
            opacity: 0;
            transform: scale(0.5);
        }
        50% {
            opacity: 1;
            transform: scale(1.2);
        }
    }
`

const Circle = styled.span`
    border-radius: 100%;
    background-color: #F4F3F9;
    width: 2rem;
    height: 2rem;
`

export default Loading;