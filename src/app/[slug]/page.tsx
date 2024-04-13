import projectsJson from '../hacking/projects.json';
import { ProjectPage } from './ProjectPage'

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
console.log('❤️‍🔥 projectsJson', projectsJson);

    return projectsJson.map((project) => ({
        slug: project.path,
        ...project
    }))
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: any) {
    const { slug } = params
    return <ProjectPage {...params} />
}