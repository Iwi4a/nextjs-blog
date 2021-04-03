import React from 'react';
import { getAboutpageData } from '../../lib/api';
import TimelineSection from '../../components/TimelineSection';
import ContactSection from '../../components/ContactSection';
import { Logo, HeroWithScrolldown } from '../../storybook';
import styled from 'styled-components';
import Head from 'next/head';

export async function getStaticProps() {
    const res = await getAboutpageData();
    return { props: { ...res.data } }; 
};

const PageHeaderTextWrapper = styled.div`
    color: white;
    position: relative;
    width: 100%;
    padding: 0 25px;
    box-sizing: border-box;
    top: 60px;
    > div {
        width: 100%;
    }
    @media screen and (min-width: 650px) {
        top: 50%;
        transform: translateY(-50%);
    }
    @media screen and (min-width: 767px) {
        padding: 0 90px;
    }
    @media screen and (min-width: 992px) {
        display: flex;
        align-items: center;
        column-gap: 25px;
        > div {
            max-width:50%;
        }
    }
    .about-header__profile-image {
        display: none;
        @media screen and (min-width: 992px) {
            display: block;
            max-width: 500px;
            width: 100%;
            margin: 0 auto;
        }
    }
    .about-header__title {
        text-align: left;
        display: flex;
        align-items: center;
        svg {
            @media screen and (max-width: 766px) {
                transform: scale(0.6);
            }
        }
        &__header {
            font-weight: 300;
            font-size: 25px;
            display: inline-block;
            margin-left: 10px;
            @media screen and (min-width: 767px) {
                font-size: 40px;
                margin-left: 50px;
            }
        }
    }
    .about-header__text {
        text-align: left;
        line-height: 1.5em;
    }
`;

const WorkAndExperienceSection = styled.section`
    background-color: #f8f5f2;
    padding: 50px 15px 60px;
    text-align: center;
    .work-and-experience__title {
        color: #414a50;
        font-weight: 700;
        font-size: 20px;
        margin: 0 0 0.8em;
        @media (min-width: 768px) {
            font-size: 40px;
        }
    }
    .work-and-experience__text {
        max-width: 800px;
        width: 100%;
        margin: auto;
        color: #414a50;
        font-size: 16px;
    }
`;

const PageHeaderDarkerFilter = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
`;

const About = (props) => {
    const aboutHeader = {
        background: props.page.acfAbout.aboutHeader.mediaItemUrl,
        title: props.page.title,
        content: props.page.content,
        profilePicture: props.page.acfAbout.profilePicture.mediaItemUrl
    }
    return (
        <div>
            <Head>
                <title>
                    About Ivelin Iliev | Front End Web Developer in London
                </title>
            </Head>
            <HeroWithScrolldown image={ aboutHeader.background } style={{ backgroundSize: 'cover', }}>
                <PageHeaderDarkerFilter />
                <PageHeaderTextWrapper>
                    <div>
                        {aboutHeader.profilePicture ? <img className="about-header__profile-image" alt="Profile picture" src={aboutHeader.profilePicture} /> : null }
                    </div>
                    <div>
                        <div className="about-header__title">
                            <Logo />
                            <h1 className="about-header__title__header">{aboutHeader.title}</h1>
                        </div>
                        <div className="about-header__text" dangerouslySetInnerHTML={{ __html: aboutHeader.content }} />
                    </div>
                </PageHeaderTextWrapper>
            </HeroWithScrolldown>
            <WorkAndExperienceSection>
                <h2 className="work-and-experience__title">Work and experience</h2>
                <div className="work-and-experience__text" dangerouslySetInnerHTML={{ __html: props.page.acfAbout.experienceText }} />
            </WorkAndExperienceSection> 
            <TimelineSection timeline={ props.page.acfAbout.timeline } />
            <ContactSection cv={props.contactSection.acfContact.cvLink.mediaItemUrl} />
        </div>
    )
}

export default About;