import BackArrow from "public/assets/svg/arrow-white.svg";
import QuestionScreen from "public/assets/svg/screen.svg";
import PurpleArrow from "public/assets/svg/arrow-purple.svg";

const Screen = ({query} : {query: string | string[] }) => {
    console.log(query);
    return (
        <div className="bg-blue-300 h-screen">
            <div className="h-[13vh]"></div>
            <div className="pt-6 pl-12">
                <BackArrow/>
            </div>
            <div className="h-[50vh] w-fit mx-auto relative mt-[6vh]">
                <div className="absolute h-[50vh] w-fit flex p-28 items-center">
                    <div>
                        <div className="flex items-center">
                            <p className="text-sm text-purple-200">1</p>
                            <PurpleArrow/>
                            <p className="text-md text-white ml-4">어떤 종류의 프로젝트인가요?</p>
                        </div>
                        <div className="flex flex-col">

                        </div>
                    </div>
                </div>
                <QuestionScreen width={"100%"} height={"100%"}/>
            </div>
        </div>
    );
};

export default Screen;