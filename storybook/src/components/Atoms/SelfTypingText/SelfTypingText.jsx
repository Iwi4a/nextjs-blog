import React from 'react';
import propTypes from 'prop-types';
import Typist from 'react-typist';
import './style.scss';

const SelfTypingText = (props) => {
    const customCursor = {
        show: true,
        blink: true,
        element: '|',
        hideWhenDone: false,
        hideWhenDoneDelay: 1000,
    }
    return (
        <Typist className="self-typing" startDelay={props.startDelay} cursor={customCursor}>
            {props.children}
            { props.backspace?.length > 0 ?
                <span>
                    <Typist.Backspace count={props?.backspaceCount} delay={props.backspaceDelay} />
                    {props.backspace}
                </span> : '' }
        </Typist>
    )
}

SelfTypingText.propTypes = {
    children: propTypes.string.isRequired,
    backspace: propTypes.string,
    backspaceCount: propTypes.number,
    backspaceDelay: propTypes.number,
    startDelay: propTypes.number,
}

SelfTypingText.defaultProps = {
    startDelay: 1000,
    backspaceDelay: 500,
}

export default SelfTypingText;
