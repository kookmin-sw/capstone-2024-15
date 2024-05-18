interface IChoiceButton {
    order: string,
    name: string,
    onClick: () => void,
}

const ChoiceButton = ({ order, name, onClick } : IChoiceButton) => {
    return (
      <div
          className="relative flex items-center justify-center gap-4 border border-white/50 bg-black/50 rounded-full p-3 w-1/2 h-16 text-purple-100 hover:bg-purple-200 hover:text-blue-300 cursor-pointer"
          onClick={onClick}
      >
          <div className="absolute top-3 left-3 flex justify-center justify-self-start items-center w-9 h-9 border border-purple-200 bg-gray-500 rounded-full font-en text-sm text-purple-200">
              {order}
          </div>
          <p className="text-sm">
              {name}
          </p>
      </div>
    );
};

export default ChoiceButton;