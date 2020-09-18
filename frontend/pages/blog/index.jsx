import React, { Component } from 'react';
import { Logo, FixedBackground, PostBlock } from '../../storybook';
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
    max-width: 900px;
    padding: 50px 0;
    @media screen and (min-width: 768px) {
        padding: 50px;
    }
`;

class Blog extends Component {
    render() {
        return (
            <>
        
                <FixedBackground
                    image={this.props.page.acfHeader.headerImage.mediaItemUrl}
                    style={{
                        backgroundSize: "auto",
                    }}
                    height="500px">
                        <PageHeader>
                            <Link href="/" as="/">
                                <a><Logo /></a>
                            </Link>
                            <h1>{this.props.page.title}</h1>
                        </PageHeader>
                </FixedBackground>
                    <BlogContainer>
                        {this.props.posts.edges.map(post => {
                            return (
                                <PostBlock
                                    key={post.node.slug}
                                    title={post.node.title}
                                    href={`blog/${post.node.slug}`}
                                    date={post.node.date}
                                    tags={post.node.tags.edges}
                                    excerpt={post.node.excerpt} />
                            )
                        })}
                    </BlogContainer>
            </>
        )
    }
}

export default Blog;