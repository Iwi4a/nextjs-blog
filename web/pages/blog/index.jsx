import React from 'react';
import { Logo, FixedBackground, PostBlock } from '../../storybook';
import { getBlogpageData, getPostsData } from '../../lib/api';
import BlogWrapper from '../../components/BlogWrapper';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

export async function getStaticProps() {
    const page = await getBlogpageData();
    const posts = await getPostsData();
    return {
        props: {
            page: page.data.page,
            posts: posts.data.posts
        }
    }
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

const Blog = (props) => {
    return (
        <>
            <Head>
                <title>
                    Blog - Ivelin Iliev | Front End Web Developer in London
                </title>
            </Head>
            <FixedBackground
                image={props.page.acfHeader.headerImage.mediaItemUrl}
                style={{
                    backgroundSize: "auto",
                }}
                height="500px">
                    <PageHeader>
                        <Link href="/" as="/">
                            <a><Logo /></a>
                        </Link>
                        <h1>{props.page.title}</h1>
                    </PageHeader>
            </FixedBackground>
            <BlogWrapper sidebarImage={props.page.acfBlogPage.profileImage.mediaItemUrl} sidebarText={props.page.acfBlogPage.profileText1}>
                {props.posts.edges.map(post => {
                    return (
                        <div key={post.node.slug}>
                            <PostBlock
                                title={post.node.title}
                                href={`blog/${post.node.slug}`}
                                date={post.node.date}
                                tags={post.node.tags.edges}
                                excerpt={post.node.excerpt} />
                        </div>
                    )
                })}
            </BlogWrapper>
        </>
    )
}

export default Blog;