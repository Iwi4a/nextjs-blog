import React from 'react';
import { FixedBackground, Slider, Logo } from '../../storybook';
import Link from 'next/link';
import { getProjectPostsData, getSingleProjectData } from '../../lib/api';
import styled from 'styled-components';
import '../../styles/wordpress.scss';
import Head from 'next/head';

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

const PageHeader = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    padding: 0 15px;
    @media screen and (min-width: 768px) {
        padding: 0 50px;
    }
    h1 {
        margin: 0;
        display: inine-block;
        max-width: 60%;
        font-size: 26px;
        color: white;
        font-weight: 400;
        margin-left: 15px;
        @media screen and (min-width: 768px) {
            font-size: 36px;
            margin-left: 25px;
        }
    }

`;

const ImageSlider = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 0 80px;
    overflow: hidden;
`;

const SingleProject = (props) => {
    return (
        <div>
            <Head>
                <title>{props.title} - Ivelin Iliev | Front End Web Developer in London</title>
            </Head>
            <FixedBackground image={props.acfProjectSingle.mockupHeader?.mediaItemUrl}>
                <PageHeader>
                    <Link href="/" as="/">
                        <a><Logo /></a>
                    </Link>
                    <h1>{props.title}</h1>
                </PageHeader>
            </FixedBackground>
            <ImageSlider>
                <Slider>
                    {props.acfProjectSingle.projectCarousel.map((slide, i) => {
                        return <div key={i}><img src={slide.projectImage?.mediaItemUrl} /></div>
                    })}
                </Slider>
            </ImageSlider>
        </div>
    )
}

export default SingleProject;
