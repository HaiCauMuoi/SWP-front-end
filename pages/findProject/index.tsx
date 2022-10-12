import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '../../components/JobPage/ProjectCard';
import SearchBar from '../../components/SearchBar';
import { fetchProject } from '../../utils/fetchProject';
import { GetServerSideProps } from 'next';
import { Project } from '../../typing';

type Props = {
  projects: Project[];
};

const Index = ({ projects }: Props) => {
  return (
    <div className="flex flex-col items-center h-full justify-start">
      <SearchBar />
      <div className="w-full border-t border-t-gray-400 h-full flex justify-center items-center mt-5 pt-10">
        <ul className="w-9/12 h-full flex flex-col items-center xl:w-8/12 justify-center xl:grid xl:grid-cols-2 2xl:grid-cols-3 2xl:w-10/12">
          {projects.map((project) => (
            <Link href={`/findProject/${project._id}`} key={project._id}>
              <ProjectCard
                key={project._id}
                projectId={project._id}
                projectName={project.Project_Name}
                projectCity={project.Project_Location}
                projectSchool={project.User_University}
                projectTime={`${project.Post_Date} - ${project.End_Date}`}
                projectField={project.Project_Field}
                projectSkills={project.Project_Skill}
                projectCriteria1="abc"
                projectCriteria2="abc"
                projectCriteria3="abc"
              />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const projects = await fetchProject();
  return {
    props: {
      projects,
    },
  };
};
