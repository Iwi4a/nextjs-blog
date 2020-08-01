import React from 'react';
import propTypes from 'prop-types';
import './style.scss';

const TimelineCell = ({title, date, alignRight, backgroundColour, children}) => {
    return (
        <div style={{ background: backgroundColour }} className={`TimelineCell ${alignRight ? "TimelineCell--right" : "TimelineCell--left"}`}>
            <div className="TimelineCell__container">
                <h4 className="TimelineCell__container__title">{title}</h4>
                <span className="TimelineCell__container__date">{date}</span>
                {children ? <p>{children}</p> : null}
            </div>
            <div style={{ borderColor: backgroundColour }} className="TimelineCell__dot"></div>
        </div>
    )
}

TimelineCell.propTypes = {
    title: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    alignRight: propTypes.bool,
    children: propTypes.string,
    backgroundColour: propTypes.string,
}

TimelineCell.defaultProps = {
    alignRight: false,
    backgroundColour: "#FFF"
}


export default TimelineCell
