import styled from "styled-components";
import SmallButton from "@/components/internal/common/SmallButton";
import React from "react";

interface IOneButtonModal {
    closeModal: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>,
    hasContent?: boolean,
}

const OneButtonModal = ( { closeModal, hasContent }:  IOneButtonModal ) => {
    return (
        <>
            <div
                className="absolute top-0 bottom-0 right-0 left-0 bg-black/20"
                onClick={closeModal}>
            </div>
            <ModalBox>
                <div>
                    <h3 className="text-md font-bold mb-4">해당 서비스는 준비중입니다.</h3>
                    { hasContent && <p className="text-sm">추후 버전에서 업데이트 될 예정입니다.</p> }
                </div>
                <SmallButton title="확인" isFilled={true} color="black" onClick={closeModal}/>
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

export default OneButtonModal;