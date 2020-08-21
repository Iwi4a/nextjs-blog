import React from 'react';
import { Timeline } from '../storybook';
import styled from 'styled-components';



const TimelineSection = (props) => {
    const TimelineSectionStyled = styled.section`
        background-color: ${props.backgroundColour};
    `;

    const Container = styled.div`
        padding: 0 15px;
        max-width: 1200px;
        margin: 0 auto;
    `;

    return (
        <TimelineSectionStyled>
            <Container>
                <Timeline {...props} />
            </Container>
        </TimelineSectionStyled>
    )
}

TimelineSection.defaultProps = {
    backgroundColour: '#fff',
}

export default TimelineSection
