import React, { Component } from 'react';
import Link from 'next/link';
import { Logo, Tile, Slider, SVG } from '../../storybook';
import { socialMediaAccounts } from '../../lib/constants';
import { getProjectpageData, getProjectPostsData } from '../../lib/api';
import ContactSection from '../../components/ContactSection';
import styled from 'styled-components';
import Head from 'next/head';

export async function getStaticProps() {
    const pageData = await getProjectpageData();
    const projectPosts = await getProjectPostsData();
    return { props: { page: pageData.data, projects: projectPosts.data.projects.nodes } }; 
};

const PageHeader = styled.section`
    margin: 0 0 80px;
    padding-top: 25px;
    box-sizing: border-box;
    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
    }
    @media screen and (min-width: 1400px) {
        padding: 80px 70px 50px;
    }
    .page-header-container {
        padding: 0 15px;
        width: 100%;
        text-align: center;
        box-sizing: border-box;
        &__title {
            max-width: 500px;
            margin: 0 auto;
            @media screen and (min-width: 768px) {
                margin: 0 auto 0 50px;
            }
            h1 {
                font-size: 26px;
                font-weight: 700;
                margin-bottom: 1em;
                line-height: 1em;
                position: relative;
                padding: 0 0 30px;
                @media screen and (min-width: 768px) {
                    font-size: 36px;
                }
                &:after {
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 40%;
                    height: 2px;
                    background-color: #fdde00;
                    @media screen and (min-width: 1200px) {
                        left: 0;
                        transform: translateX(0);
                    }
                }
            }
            @media screen and (min-width: 1200px) {
                padding-left: 25px;
            }
            a {
                display: inline-block;
                margin-right: 5px;
                transform: scale(0.8);
                transition: 0.2s ease-in-out all;
                &:hover {
                    transform: scale(1);
                }
            }
        }
        @media screen and (min-width: 1200px) {
            display: flex;
            align-items: center;
            text-align: left;
        }
    }
    
    .Slider {
        width: 100%;
        @media screen and (min-width: 768px) {
            max-width: 50%;
        }
    }
`;

const ProjectsContainer = styled.section`
    display: block;
    columns: 2;
    padding: 0 15px;
    margin: 0 auto;
    overflow: hidden;
    @media screen and (min-width: 992px) {
        columns: 3;
    }
    @media screen and (min-width: 1200px) {
        columns: 4;
    }
    @media screen and (min-width: 1400px) {
        padding: 0 70px;
    }
    > div {
        margin: 0 0 25px;
    }
`;
class Projects extends Component {
    
    render() {
        const socialIcons = socialMediaAccounts.map(acc => {
            return (
                <a key={acc.id} target="_blank" href={acc.url}>
                    <SVG icon={acc.id} />
                </a>
            );
        })
        return (
            <div>
                <Head>
                    <title>Projects - Ivelin Iliev | Front End Web Developer in London</title>
                </Head>
                <PageHeader>
                    <div className="page-header-container">
                        <Link href="/" as="/">
                            <a><Logo withShadow={true} /></a>
                        </Link>
                        <div className="page-header-container__title">
                            <h1>{this.props.page.page.acfProjects.projectHeaderTitle}</h1>
                            <div dangerouslySetInnerHTML={{ __html: this.props.page.page.acfProjects.projectHeaderText }} />
                            { socialIcons }
                        </div>
                    </div>
                    <Slider settings={{ arrows: false }}> 
                        { this.props.page.page.acfProjects.mockups.map(slide => {
                                return (
                                    <div key={slide.mockupImage.mediaItemUrl}><img src={slide.mockupImage.mediaItemUrl} /></div>
                                )
                            })
                        }
                    </Slider>
                </PageHeader>
                <ProjectsContainer>
                    {this.props.projects.map(project => {
                        return (
                            <div key={project.slug}>
                                <Link href={`/projects/${project.slug}`} as={`/projects/${project.slug}`}>
                                    <a>
                                        <Tile title={project.title} image={project.featuredImage.node.mediaItemUrl} />
                                    </a>
                                </Link>
                            </div>
                        )
                    })}
                </ProjectsContainer>
                <ContactSection cv={this.props.page.contactSection.acfContact.cvLink.mediaItemUrl}>
                    {this.props.page.contactSection.acfContact.contactFooterText}
                </ContactSection>
            </div>
        )
    }
}


export default Projects;