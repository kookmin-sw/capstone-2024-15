interface IChoiceButton {
    order: string,
    name: string,
}

const ChoiceButton = ({ order, name } : IChoiceButton) => {
    return (
      <div className="flex items-center gap-4 border border-purple-200 bg-purple-200/20 rounded-md p-3 w-1/2 h-14">
          <div className="flex justify-center items-center w-9 h-9 border border-purple-200 bg-gray-500 rounded-md font-en text-xs text-purple-200">
              {order}
          </div>
          <p className="text-purple-200 text-xs">
              {name}
          </p>
      </div>
    );
};

export default ChoiceButton;