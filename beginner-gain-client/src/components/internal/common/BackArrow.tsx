import Back from "public/assets/svg/arrow-white.svg";
import {useRouter} from "next/router";

const BackArrow = () => {
    const router = useRouter();
    const handleButtonClick = () => {
        router.back();
    }
    return (
        <span onClick={handleButtonClick}>
            <Back />
        </span>
    );
};

export default BackArrow;