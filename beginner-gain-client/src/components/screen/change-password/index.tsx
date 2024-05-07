import Input from "@/components/internal/common/Input";
import BigButton from "@/components/internal/common/BigButton";
import {useState} from "react";
import Header from "@/components/layout/Header";
import {useRouter} from "next/router";

const Screen = () => {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const router = useRouter();

    const isPasswordMatch : boolean = password === confirmPassword;
    const requiredFields = [password, confirmPassword, isPasswordMatch];

    // 버튼 활성화 여부를 나타내는 변수
    const isButtonActive = requiredFields.every(item => Boolean(item));

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/');
    }

    return (
        <div>
            <Header />
            <div className="flex flex-col justify-center items-center h-[calc(100vh-54px-4rem)]">
                <p className="font-en text-lg font-semibold mb-16">
                    Change your Password
                </p>
                <form className="w-[30%]">
                    <fieldset className="flex flex-col gap-12 w-full">
                        <label>
                            <p className="font-en text-sm mb-5">Password</p>
                            <Input
                                placeholder="새 비밀번호를 입력하세요"
                                value={password}
                                setValue={setPassword}/>
                        </label>
                        <label>
                            <p className="font-en text-sm mb-5">Confirm Password</p>
                            <Input
                                placeholder="새 비밀번호를 한번더 입력하세요"
                                value={confirmPassword}
                                setValue={setConfirmPassword}/>
                        </label>
                    </fieldset>
                    <section className="mt-[9vh]">
                        <BigButton
                            name="비밀번호 변경"
                            color="purple"
                            isFilled
                            isDisabled={!isButtonActive}
                            onClick={handleButtonClick}/>
                    </section>
                </form>
            </div>
        </div>
    );
};

export default Screen;