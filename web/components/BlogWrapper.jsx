import React from 'react';
import styled from 'styled-components';
import { SlidingImageSidebar } from '../storybook';

const BlogContentWrapper = styled.section`
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
        padding: 0 15px;
        box-sizing: border-box;
        img {
            max-width: 100%;
            height: auto;
        }
        pre {
            overflow: auto;
        }
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

const BlogWrapper = ({ children, sidebarImage, sidebarText}) => {
    const pageLocation = typeof window === 'undefined' ? '' : window.location;
    return (
        <BlogContentWrapper>
            <div className="content">
                {children}
            </div>
            <div className="sidebar">
                <SlidingImageSidebar image={sidebarImage} text={sidebarText} url={pageLocation} />
            </div>
        </BlogContentWrapper>
    )
}

export default BlogWrapper;
