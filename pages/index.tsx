import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import { ImArrowRight2 } from 'react-icons/im';
import FindProjects from './findProject';
import ProjectCard from '../components/JobPage/ProjectCard';
import SearchBar from '../components/SearchBar';
import { fetchProject } from '../utils/fetchProject';
import { GetServerSideProps } from 'next';
import { Project } from '../typing';
import dateFormat from '../utils/dateFormat';

type Props = {
  projects: Project[];
};

function Home({ projects }: Props) {
  const { data: session, status } = useSession();
  console.log(status);
  console.log(session);

  return (
    <>
      <FindProjects projects={[...projects]} />
    </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const projects = await fetchProject();
  return {
    props: {
      projects,
    },
  };
};
