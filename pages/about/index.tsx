import React from 'react';
import { getAboutpageData } from '../../lib/api';
import TimelineSection from '../../components/TimelineSection';
import ContactSection from '../../components/ContactSection';
import { AboutHero } from '../../storybook';
import styles from 'styled-components';


export async function getStaticProps() {
    const res = await getAboutpageData();
    return { props: { ...res.data } }; 
};

const Section = styles.section`
    background-color: #f8f5f2;
    padding: 50px 15px 60px;
    text-align: center;
`;
const Title = styles.h2`
    color: #414a50;
    font-weight: 700;
    font-size: 20px;
    margin: 0 0 0.8em;
    @media (min-width: 768px) {
        font-size: 40px;
    }
`;
const Text = styles.div`
    max-width: 800px;
    width: 100%;
    margin: auto;
    color: #414a50;
    font-size: 16px;
`;


const About = (props) => {

    return (
        <div>
            <AboutHero image={ props.page.acfAbout.aboutHeader.mediaItemUrl } />
            <Section>
                <Title>Work and experience</Title>
                <Text dangerouslySetInnerHTML={{ __html: props.page.acfAbout.experienceText }} />
            </Section> 
            <TimelineSection timeline={ props.page.acfAbout.timeline } />
            <ContactSection />
        </div>
    )
}

export default About;