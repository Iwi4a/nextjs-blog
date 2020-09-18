import React from 'react';
import Timeline from './Timeline';


const timelineMock = [
    {
        title: "Web developer @ Home",
        date: "March 2019 - Present",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "Front end developer @ Home",
        date: "March 2119 - Present",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
    },
    {
        title: "Web developer @ Home",
        date: "March 2119 - Present",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "Developer @ Home",
        date: "March 2019 - Present",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        title: "WP developer @ Home",
        date: "2019 - Present",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]


export const defaultTimeline = () => {
    return (<Timeline timeline={timelineMock} />)
}

export const withAnimations = () => {
    return (
    <div>
        <h3 style={{marginBottom: '500px'}}>Scroll down to see animations</h3>
        <Timeline timeline={timelineMock} />
    </div>)
}

export const withBackground = () => {
    return (
    <div>
        <h3 style={{marginBottom: '500px'}}>Scroll down to see animations</h3>
        <Timeline timeline={timelineMock} backgroundColour="#f8f5f2" />
    </div>)
}

export default {
    title: 'Molecules/Timeline'
}