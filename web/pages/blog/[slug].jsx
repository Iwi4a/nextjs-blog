import React from 'react';
import { FixedBackground, Logo } from '../../storybook';
import Link from 'next/link';
import { getPostsData, getSinglePostData } from '../../lib/api';
import styles from 'styled-components';
import '../../styles/wordpress.scss';

export async function getStaticPaths() {
    const res = await getPostsData();
    const paths = res.data.posts.edges.map((post) => ({
        params: {
            slug: post.node.slug
        }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await getSinglePostData(params.slug);

    return { props: { header: res.data.page.acfBlogPage, page: res.data.post } };
}

const PageHeader = styles.div`
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

const ContentWrapper = styles.section`
    padding: 50px 15px;
    @media screen and (min-width: 768px) {
        max-width: 1200px;
        margin: 0 auto;
    }
`;

const SingleProject = (props) => {
    return (
        <div>
            <FixedBackground image={props.header.blogImage.mediaItemUrl}>
                <PageHeader>
                    <Link href="/" as="/">
                        <a><Logo /></a>
                    </Link>
                    <h1>{props.page.title}</h1>
                </PageHeader>
            </FixedBackground>
            <ContentWrapper>
                <div dangerouslySetInnerHTML={{ __html: props.page.content }} />
            </ContentWrapper>
        </div>
    )
}

export default SingleProject;
