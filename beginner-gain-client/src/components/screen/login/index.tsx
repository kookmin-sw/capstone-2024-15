import Input from "@/components/internal/common/Input";
import {useState} from "react";
import Logo from "public/assets/svg/beginnergain-logo-black.svg";
import BigButton from "@/components/internal/common/BigButton";
import Image from "next/image";
import {useRouter} from "next/router";
import Link from "next/link";
import {useMutation} from "react-query";
import {login} from "@/server/user";
import {ILogin, ILoginResponse} from "@/types/User";
import { setCookie } from "cookies-next";
import {AxiosResponse} from "axios";
import {useRecoilState} from "recoil";
import {userState} from "@/recoil/userState";

const Screen = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [user, setUser] = useRecoilState(userState);

    const router = useRouter();

    const isButtonActive = email && password;

    // react-query test 코드
    const loginMutation = useMutation({
        mutationFn: (loginData: ILogin) => {
            return login(loginData);
        },
        onError(err) {
            console.log(err);
        },
        onSuccess(data: AxiosResponse) {
            const loginData: ILoginResponse = data.data;
            // 쿠키로 token 저장 (현재 testToken으로 대체)
            setCookie('accessId', loginData.id);
            // user 데이터 recoil 저장
            setUser({
                id: loginData.id,
                email: loginData.email,
                name: loginData.name,
            })
            router.push('/');
        }
    })

    const handleLoginButtonClick = async () => {
        loginMutation.mutate({
            email: email,
            password: password,
        });
    };

    const handleJoinButtonClick = () => {
        router.push('/join');
    };

  return (
    <div className="flex h-screen">
        <div className="flex-1 bg-purple-100 h-[100vh] min-w-[50vw] p-[6vh]">
            <Link href={'/'}>
                <Logo />
            </Link>
            <div className="w-[31vw] h-[31vw] mx-auto mt-[8vh]">
                <Image
                    src="https://beginergain.s3.ap-northeast-2.amazonaws.com/develop/working-illust.svg"
                    alt="로그인 일러스트"
                    width="1000"
                    height="1000"
                    priority={true}/>
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
                        setValue={setPassword}
                        isPassword/>
                </div>
                <Link
                    className="text-xxs text-gray-300 self-end mt-4 cursor-pointer"
                    href="/reset-password">
                    비밀번호를 잊어버렸나요?
                </Link>
                <div className="flex flex-col gap-5 mt-16">
                    <BigButton
                        name="로그인"
                        color={'blue'}
                        isFilled={true}
                        isDisabled={!isButtonActive}
                        onClick={handleLoginButtonClick}/>
                    <BigButton
                        name="회원가입"
                        color={'blue'}
                        isFilled={false}
                        onClick={handleJoinButtonClick}/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Screen;