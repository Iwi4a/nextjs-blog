import React from 'react';
import propTypes from 'prop-types';
import TimelineCell from '../../Atoms/TimelineCell/TimelineCell';
import './styles.scss';

const Timeline = ({ className, timeline, styles, ...rest}) => {
    if (timeline.length > 0) {
        return (
            <div className={`Timeline ${className}`} {...rest}>
                {timeline.map((cell, idx) => {
                    return (
                        <TimelineCell key={idx} title={cell.title} date={cell.date} alignRight={idx % 2 === 0}>
                            {cell.text}
                        </TimelineCell>
                    )
                })}
            </div>
        )
    }
    return "Not enought history for a timeline.";
};

Timeline.propTypes = {
    timeline: propTypes.array.isRequired,
    styles: propTypes.object,
}

Timeline.defaultProps = {
    timeline: [],
    styles: {},
}

export default Timeline;
