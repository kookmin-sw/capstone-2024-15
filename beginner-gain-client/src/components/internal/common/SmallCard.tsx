import { useState } from 'react';

import DeleteIcon from 'public/assets/svg/delete-icon.svg';
import MiniModal from "@/components/internal/modal/MiniModal";
import SmallButton from "@/components/internal/common/SmallButton";

export interface ICard {
  title: string;
  deleteProject: () => void;
}

const SmallCard = ({ title, deleteProject }: ICard) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <>
      <div
        className="bg-white p-5 rounded-xl flex flex-col justify-between"
        style={{
          width: '220px',
          height: '220px',
        }}
      >
        <div>
          <div className="flex justify-between mb-3">
            <p className="text-xs font-medium text-gray-300">
              project
            </p>
            <button onClick={() => setIsOpenModal(true)}>
              <DeleteIcon />
            </button>
          </div>
          <div>
            <p className="text-xs font-medium text-blue-300">{title}</p>
            <p className="text-xxs font-medium text-gray-300">2024.03.20</p>
          </div>
        </div>
        <div className="w-full text-center">
          <SmallButton title="다운로드" isFilled={false} />
        </div>
      </div>
      {isOpenModal &&
        <MiniModal
          title="보일러플레이트를 삭제하시겠습니까?"
          content="삭제 후 되돌릴 수 없습니다."
          button="삭제하기"
          handleButtonClick={deleteProject}
          secondButton="취소"
          handleSecondButtonClick={() => setIsOpenModal(false)}
        />
      }
    </>
  );
}

export default SmallCard;
