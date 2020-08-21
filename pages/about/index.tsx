import React from 'react';
import { getAboutpageData } from '../../lib/api';
import TimelineSection from '../../components/TimelineSection';


export async function getStaticProps() {
    const res = await getAboutpageData();
    return { props: { ...res.data } }; 
  };

const About = (props) => {
    return (
        <div>
            <TimelineSection timeline={props.page.acfAbout.timeline} />
        </div>
    )
}

export default About;