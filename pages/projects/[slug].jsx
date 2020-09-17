import React from 'react';
import { getProjectPostsData, getSingleProjectData } from '../../lib/api';

export async function getStaticPaths() {
    const res = await getProjectPostsData();
    const paths = res.data.projects.nodes.map((post) => ({
        params: {
            slug: post.slug
        }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await getSingleProjectData(params.slug);

    return { props: { ...res.data.project } };
}

const Project = (props) => {

    return (
        <div>
            {props.title}
        </div>
    )
}

export default Project
