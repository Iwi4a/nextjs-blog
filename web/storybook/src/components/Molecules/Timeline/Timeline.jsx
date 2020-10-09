import React from 'react';
import PropTypes from 'prop-types';
import TimelineCell from '../../Atoms/TimelineCell/TimelineCell';
import TrackVisibility from 'react-on-screen';
import './styles.scss';

const Timeline = ({ className, timeline, backgroundColour, style, ...rest}) => {
    if (timeline.length > 0) {
        return (
            <div className={`Timeline ${className}`} style={{backgroundColor: backgroundColour, ...style}} {...rest}>
                {timeline.map((cell, idx) => {
                    return (
                        <TrackVisibility key={idx} once>
                            {({isVisible}) => {
                                return (
                                    <TimelineCell backgroundColour={backgroundColour} className={isVisible ? 'TimelineCell--onscreen' : ''} title={cell.title} date={cell.date} alignRight={idx % 2 === 0}>
                                        {cell.text}
                                    </TimelineCell>
                                )
                            }}
                            
                        </TrackVisibility>
                    )
                })}
            </div>
        )
    }
    return "Not enought history for a timeline.";
};

Timeline.propTypes = {
    timeline: PropTypes.array.isRequired,
    backgroundColour: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
}

Timeline.defaultProps = {
    timeline: [],
    backgroundColour: '#fff',
    className: '',
    style: {},
}

export default Timeline;
