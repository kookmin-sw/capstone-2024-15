import styled from "styled-components";
import SmallButton from "@/components/internal/common/SmallButton";
import React from "react";

interface IMiniModal {
    title: string,
    button: string,
    handleButtonClick: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>,
    content?: string,
    secondButton?: string,
    handleSecondButtonClick?: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>,

}

const MiniModal = ( { handleButtonClick, title, button, content, secondButton, handleSecondButtonClick }:  IMiniModal ) => {
    return (
        <>
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/20">
            </div>
            <ModalBox>
                <div>
                    <h3 className="text-md font-bold mb-4">{title}</h3>
                    {
                        content &&
                        <p className="text-sm">{content}</p>
                    }
                </div>
                <div className="flex gap-4">
                    <SmallButton title={button} isFilled={true} color="black" onClick={handleButtonClick}/>
                    { secondButton &&
                        <SmallButton title={secondButton} isFilled={false} color="black" onClick={handleSecondButtonClick}/>
                    }
                </div>
            </ModalBox>
        </>

    );
};

const ModalBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.08), 0px 4px 6px rgba(0, 0, 0, 0.05);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem;
    z-index: 99;
`

export default MiniModal;