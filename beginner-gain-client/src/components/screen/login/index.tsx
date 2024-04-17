import Input from "@/components/internal/common/Input";
import {useState} from "react";
import Logo from "public/assets/svg/beginnergain-logo-black.svg";
import MainImage from "public/assets/svg/working-illust.svg";
import BigButton from "@/components/internal/common/BigButton";

const Screen = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
  return (
    <div className="flex">
        <div className="flex-1 bg-purple-100 h-[100vh] min-w-[50vw] p-[6vh]">
            <div className="">
                <Logo />
            </div>
            <div className="w-[31vw] h-[31vw] mx-auto mt-[8vh]">
                <MainImage width={"100%"} height={"100%"} />
            </div>
        </div>
        <div className="flex-1 p-[10vh]">
            <div className="flex flex-1 flex-col">
                <h2 className="font-en text-lg font-semibold mb-[10vh]">Login</h2>
                <div className="mb-12">
                    <p className="font-en text-sm pb-5">Email Address</p>
                    <Input
                        placeholder={"이메일을 입력하세요"}
                        value={email}
                        setValue={setEmail}/>
                </div>
                <div>
                    <p className="font-en text-sm pb-5">Password</p>
                    <Input
                        placeholder={"비밀번호를 입력하세요"}
                        value={password}
                        setValue={setPassword}/>
                </div>
                <p className="text-xxs text-gray-300 self-end mt-4 cursor-pointer">비밀번호를 잊어버렸나요?</p>
                <div className="flex flex-col gap-5 mt-16">
                    <BigButton
                        name="로그인"
                        color={'blue'}
                        isFilled={true}/>
                    <BigButton
                        name="회원가입"
                        color={'blue'}
                        isFilled={false}/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Screen;