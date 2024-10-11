"use client"
import React from 'react';
// import { graphql } from 'gatsby'
import styled from 'styled-components';
import projectsJson from './projects.json';
import Head from 'next/head';
import { ProjectItem } from './ProjectItem';


export interface Project {
    name: string,
    status?: string | string[],
    description?: string,
    year: number[],
    link?: string,
    linkToTrello?: string,
    linkToSource?: string,
    callToAction?: string,
    videos?: string[]
    pdfs?: string[]
    pdfText?: string[]
    keywords?: string[],
    images?: string[]
    imageWidths?: number[],
    teammates?: { name: string, link?: string }[]
    logo?: string,
    agency?: { name: string, link: string }
    tagline?: string
    highlight?: boolean
    path: string,
    gridRow?: string,
    gridColumn?: string
}

const Main = styled.main`
  margin: 2.5vw;

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  h1 {
    font-size: 24px;
  }
  p {
    color: #555;
    line-height: 1.5;
  }

  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in 205ms;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity 200ms ease-in;
  }
  #additional-info {
    margin: 0 auto;
  }
  .markdown p:first-child {
    margin-top: 0;
  }
`;



const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-flow: dense;
  grid-gap: 2.5vw;
`;


const compareYears = (a: Project, b: Project) => {

    if (Math.max(...a.year) > Math.max(...b.year)) {
        return -1;
    } else if (Math.max(...a.year) < Math.max(...b.year)) {
        return 1;
    } else if (Math.min(...a.year) < Math.min(...b.year)) {
        return 1;
    } else if (Math.min(...a.year) > Math.min(...b.year)) {
        return -1;
    } else if (
        Math.min(...a.year) === Math.min(...b.year) &&
        Math.max(...a.year) === Math.max(...b.year)
    ) {
        if (a.name.length > b.name.length) {
            // arbitrary but deterministic (I doubt names will often be same length)
            return 1;
        }
    }

    return 0;
};

const ProjectList = ({ projects }: { projects: Project[] }) => (
    // <ul className={showingAdditionalInfo ? 'hidden' : 'visible'}>
    <UL>
        {projects.sort(compareYears).map(project => {
            return (
                <ProjectItem
                    key={project.name}
                    year={project.year}
                    status={project.status}
                    tagline={project.tagline}
                    name={project.name}
                    description={project.description}
                    callToAction={project.callToAction}
                    link={project.link}
                    linkToSource={project.linkToSource}
                    linkToTrello={project.linkToTrello}
                    highlight={project.highlight}
                    agency={project.agency}
                    path={project.path}
                    gridRow={project.gridRow}
                    gridColumn={project.gridColumn}
                />
            );
        })}
    </UL>
);


const ProjectsIndex = () => {

    console.log(projectsJson)
    return <div>
        <Head>
            <title>David Baker is Hacking</title>
        </Head>
        <Main>
            <ProjectList projects={projectsJson} />
        </Main>
        {/* <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} /> */}
    </div>

}

export default ProjectsIndex;

