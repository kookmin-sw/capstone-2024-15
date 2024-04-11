
export interface IInput {
    placeholder: string;
    value: string;
    setValue:
}

const Input = ({ placeholder }: IInput) => {
    return (
        <input placeholder={placeholder}/>
    );
};

export default Input;