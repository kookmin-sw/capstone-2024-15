import { useState } from 'react';

import DeleteIcon from 'public/assets/svg/delete-icon.svg';
import SmallButton from "@/components/internal/common/SmallButton";
import OneButtonModal from "@/components/internal/modal/OneButtonModal";

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
      {isOpenModal && <OneButtonModal closeModal={()=> setIsOpenModal(false)} hasContent/>}
    </>
  );
}

export default SmallCard;
