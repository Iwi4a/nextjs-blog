import React, { Component } from 'react';
import { Logo, FixedBackground, PostBlock, SlidingShareSidebar } from '../../storybook';
import Link from 'next/link';
import { getBlogpageData, getPostsData } from '../../lib/api';
import styles from 'styled-components';


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

const BlogContainer = styles.section`
    display: block;
    max-width: 1400px;
    padding: 50px 0;
    box-sizing: border-box;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
        padding: 50px;
        display: flex;
    }
    .content {
        width: 100%;
        padding-right: 15px;
        @media screen and (min-width: 768px) {
            width: calc(100% - 300px);
        }
        @media screen and (min-width: 1200px) {
            padding-right: 50px;
        }
    }
    .sidebar {
        max-width: 300px;
        margin: 0 auto;
    }
`;

const Blog = (props) => {
    return (
        <>
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
            <BlogContainer>
                <div className="content">
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
                </div>
                <div className="sidebar">
                    <SlidingShareSidebar image={props.page.acfBlogPage.profileImage.mediaItemUrl} text={props.page.acfBlogPage.profileText1} url={'http://google.com'} />
                </div>
            </BlogContainer>
        </>
    )
}

export default Blog;