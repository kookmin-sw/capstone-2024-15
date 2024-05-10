import router from 'next/router';
import { useEffect, useState } from 'react';
import { getProjects, deleteProject } from "@/server/projects";

import SmallCard from "@/components/internal/common/SmallCard";
import ArrowButton from "@/components/internal/common/ArrowButton";
import Divider from "@/components/internal/common/Divider";
import Header from "@/components/layout/Header";

import { useRecoilValue } from "recoil";
import { userState } from "src/recoil/userState";
import { IProject } from "@/types/Project";

const Screen = (props) => {
  const userInfo = useRecoilValue(userState);
  const [projectList, setProjectList] = useState<IProject[] | undefined>(undefined);

  if (!userInfo) return;

  const getData = async () => {
    const data = await getProjects(userInfo.id);
    setProjectList(data);
  }

  const deleteData = async (projectId: number) => {
    deleteProject(projectId);
    window.location.reload();
  }

  useEffect(() => {
    if (!userInfo) return;
    getData();
  }, []);

  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} />
      <div className="w-full flex flex-col">
        <div className="px-20 flex flex-col">
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
        </div>
      </div>
    </>
  )
};

export default Screen;
