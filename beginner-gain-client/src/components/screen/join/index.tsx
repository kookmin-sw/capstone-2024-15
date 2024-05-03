import Logo from "../../../../public/assets/svg/beginnergain-logo-black.svg";
import Input from "@/components/internal/common/Input";
import BigButton from "@/components/internal/common/BigButton";
import {useState} from "react";
import Image from "next/image";
import {useRouter} from "next/router";

const Screen = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');

    const router = useRouter();

    const handleSubmitButtonClick = () => {
        router.push('/');
    }
    return (
        <div className="flex h-screen">
            <div className="flex-1 p-[10vh] flex flex-col">
                <div className="flex flex-1 flex-col">
                    <h2 className="font-en text-lg font-semibold mb-[7vh]">Create New Account</h2>
                    <div className="mb-12">
                        <p className="font-en text-sm pb-5">Email Address</p>
                        <Input
                            placeholder={"이메일을 입력하세요"}
                            value={email}
                            setValue={setEmail}/>
                    </div>
                    <div className="mb-12">
                        <p className="font-en text-sm pb-5">Password</p>
                        <Input
                            placeholder={"비밀번호를 입력하세요"}
                            value={password}
                            setValue={setPassword}/>
                    </div>
                    <div className="mb-12">
                        <p className="font-en text-sm pb-5">Name</p>
                        <Input
                            placeholder={"이름을 입력하세요"}
                            value={name}
                            setValue={setName}/>
                    </div>
                </div>
                <BigButton
                    name="회원가입"
                    color={'blue'}
                    isFilled={true}
                    onClick={handleSubmitButtonClick}/>
            </div>
            <div className="flex flex-col flex-1 bg-purple-100 h-[100vh] min-w-[50vw] p-[6vh]">
                <div className="self-end">
                    <Logo/>
                </div>
                <div className="w-[31vw] h-[31vw] mx-auto mt-[8vh]">
                    <Image src="https://beginergain.s3.ap-northeast-2.amazonaws.com/develop/working-illust.svg" alt="로그인 일러스트" width="1000" height="1000"/>
                </div>
            </div>
        </div>
    );
};

export default Screen;