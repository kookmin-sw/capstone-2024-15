// 지렁아 요기다가 만들면됑
// screen은 페이지 전체? 컴포넌트구 internal은 버튼이나 모달 같은 자그마한 컴포넌트들입니당

import Input from "@/components/internal/common/Input";
import {useState} from "react";

const Screen = () => {
    const [email, setEmail] = useState<string>('');
  return (
    <div>
        <Input placeholder={"이메일을 입력하세요"} value={email} setValue={setEmail} />
    </div>
  );
};

export default Screen;