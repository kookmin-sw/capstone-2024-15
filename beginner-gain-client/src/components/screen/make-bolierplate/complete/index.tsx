import router from 'next/router';
import Image from "next/image";

import DarkHeader from "@/components/layout/DarkHeader";
import BigButton from "@/components/internal/common/BigButton";
import BgImage from "public/assets/svg/ellipse.svg";
import axios from "axios";
import {useEffect, useState} from "react";

const Screen = () => {
  const [downloadUrl, setDownloadUrl] = useState<string>();
  const testUrl = "https://beginergain.s3.ap-northeast-2.amazonaws.com/develop/client.zip";
  const fetchFile = async () => {
    //
    // const {
    //   data: { type, arrayBuffer },
    // } = await axios.get('/api/file', { params : { url: testUrl }});
    //
    // const blob = await new Blob([Uint8Array.from(arrayBuffer)], { type });
    // setDownloadUrl(window.URL.createObjectURL(blob));
  }
  const handleDownloadClick = async () => {
    const rawData = await fetch(testUrl);
    const blob = await rawData.blob();
    const fileUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = fileUrl;
    link.style.display = 'none';
    link.download = 'client-boilerplate';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  return (
    <>
      <DarkHeader />
      <div className="flex flex-col items-center justify-center bg-blue-300 h-[calc(100vh-54px-4rem)]">
        <BgImage className="fixed bottom-0 w-screen h-3/5 z-0"/>
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
            <BigButton name="다운로드" color="purple" isFilled={true} onClick={handleDownloadClick}/>
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