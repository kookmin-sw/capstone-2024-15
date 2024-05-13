import router from 'next/router';
import { useEffect, useState } from 'react';
import { getProjects, deleteProject } from "@/server/project";

import SmallCard from "@/components/internal/common/SmallCard";
import ArrowButton from "@/components/internal/common/ArrowButton";
import Divider from "@/components/internal/common/Divider";
import Header from "@/components/layout/Header";
가import EmptyFile from "public/assets/svg/file-icon.svg";

import { useRecoilValue } from "recoil";
import { userState } from "src/recoil/userState";
import { IProject } from "@/types/Project";

const Screen = (props) => {
  const userInfo = useRecoilValue(userState);
  const [projectList, setProjectList] = useState<IProject[]>([]);

  if (!userInfo) return;

  const getData = async () => {
    const data = await getProjects(userInfo.id);
    setProjectList(data);
  }

  const deleteData = async (projectId: number) => {
    deleteProject(projectId);
  }

  useEffect(() => {
    if (!userInfo) return;
    getData();
  }, []);

  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} />
      <div className="w-full h-[calc(100vh-54px-4rem)] flex flex-col">
        <div className="h-full px-20 flex flex-col">
          <p className="mt-5 text-sm font-medium text-gray-400">
            My Boilerplate
          </p>
          <Divider color="gray-100" />
          <div className="self-end">
            <ArrowButton
              title="내 boilerplate 생성하기"
              onClick={() => router.push("/make-boilerplate/project-name")}
            />
          </div>
          {projectList.length === 0 ?
            <div className="w-full h-full flex flex-col gap-8 mb-10 items-center justify-center">
              <EmptyFile />
              <h3 className="text-sm text-gray-300 font-medium">
                보일러플레이트 보관함이 비어있습니다.
              </h3>
            </div>
            :
            <div
              className="mt-14 grid gap-10"
              style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(17rem, 1fr))',
              }}
            >
              {projectList?.map((v) => (
                <SmallCard key={v.id} projectData={v} deleteProject={() => deleteData(v.id)} />
              ))}
            </div>
          }
        </div>
      </div>
    </>
  )
};

export default Screen;
