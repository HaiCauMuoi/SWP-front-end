import React from 'react';
import Image from 'next/image';
import JobDescription from '../../components/JobPage/JobDescription';
import JobFull from '../../components/JobPage/JobFull';
import SearchBar from '../../components/SearchBar';
import { Project } from '../../typing';
import { GetServerSideProps } from 'next';
import { fetchProject } from '../../utils/fetchProject';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';

type ProjectFullProps = {
  projects: Project[];
};

export const getServerSideProps: GetServerSideProps<
  ProjectFullProps
> = async () => {
  const projects = await fetchProject();
  return {
    props: {
      projects,
    },
  };
};

function ProjectID({ projects }: ProjectFullProps) {
  const router = useRouter();
  const query = router.query;
  const arr = projects || [];

  const uid = query.id;
  const project = arr.find((project) => project._id === uid);

  return (
    <div className="flex flex-col items-center h-full justify-start">
      <div className="w-full h-full justify-center hidden xl:flex">
        <SearchBar />
      </div>

      <div className="w-full border-t border-t-gray-200 h-full flex justify-center">
        <div className="w-9/12 h-full flex justify-start mt-5 pt-10">
          <JobFull
            jobName={project?.Project_Name}
            email="Email Nguoi Dang Project"
            school={project?.User_University}
            city={project?.Project_Location}
            time={'project?.Post_Date'}
            numberOfPeople={project?.Employee_Amount}
            typeOfJob={project?.Project_Field}
          />
          <JobDescription desc={'project?.Post_Date'} />
        </div>
      </div>
    </div>
  );
}

export default ProjectID;
