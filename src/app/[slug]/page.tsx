import { Project } from '../hacking/page';
import projectsJson from '../hacking/projects.json';
import { ProjectPage } from './ProjectPage'

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    return projectsJson.map((project) => ({
        slug: project.path,
        // doesn't seem to work
        ...project
    }))
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: any) {
    const { slug } = params
    console.log('❤️‍🔥 params', params);

    const project = projectsJson.find(({ path }) => path === slug) as unknown as Project

    console.log('❤️‍🔥 project', project);

    return <ProjectPage {...project} />
}