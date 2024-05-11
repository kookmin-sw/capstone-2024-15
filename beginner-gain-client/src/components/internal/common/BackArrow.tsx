import Back from "public/assets/svg/arrow-white.svg";
import {useRouter} from "next/router";

const BackArrow = () => {
    const router = useRouter();
    const handleButtonClick = () => {
        router.back();
    }
    return (
        <span onClick={handleButtonClick}>
            <Back className="hover:-translate-x-1.5 hover:ease-in hover:duration-150 duration-150"/>
        </span>
    );
};

export default BackArrow;