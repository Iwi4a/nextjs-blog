import React from 'react';
import { Timeline } from '../storybook';
import styled from 'styled-components';


const TimelineSectionStyled = styled.section`
    background-color: ${props => props.backgroundColour || "#fff"};
`;

const Container = styled.div`
    padding: 0 15px;
    max-width: 1200px;
    margin: 0 auto;
`;

class TimelineSection extends React.Component {
    render() {
        return (
            <TimelineSectionStyled>
                <Container>
                    <Timeline {...this.props} />
                </Container>
            </TimelineSectionStyled>
        )
    }
}
export default TimelineSection
