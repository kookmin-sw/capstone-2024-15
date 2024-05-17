import router from 'next/router';
import Image from "next/image";

import DarkHeader from "@/components/layout/DarkHeader";
import BigButton from "@/components/internal/common/BigButton";
import BgImage from "public/assets/svg/ellipse.svg";
import {useRecoilValue} from "recoil";
import {downloadUrlState} from "@/recoil/downloadUrlState";

const Screen = (props: any) => {
    const downloadUrl = useRecoilValue(downloadUrlState);
  return (
    <>
      <DarkHeader isLoggedIn={props.isLoggedIn} />
      <div className="flex flex-col items-center justify-center bg-blue-300 h-[calc(100vh-54px-4rem)]">
        <BgImage width="100%" height="100%" className="fixed bottom-0 z-0 w-screen h-3/5"/>
        <div className="flex-1 flex flex-col w-1/3 h-full justify-center gap-6 z-10 mb-24">
          <div className="w-full flex flex-col items-center mb-8">
            <div className="w-3/4">
              <Image
                src="https://beginergain.s3.ap-northeast-2.amazonaws.com/develop/computer-illust.svg"
                alt="computer-illust"
                width={500}
                height={500}
                priority={true}
              />
            </div>
            <p className="text-blue-300 text-lg font-semibold self-center">
              boilerplate가 생성되었습니다!
            </p>
          </div>
          <a href={downloadUrl} download>
            <BigButton name="다운로드" color="purple" isFilled={true} />
          </a>
          <BigButton
            name="내 boilerplate 보러가기"
            color="purple"
            isFilled={false}
            onClick={() => router.push("/my-boilerplate")}
          />
        </div>
      </div>
    </>
  );
};

export default Screen;