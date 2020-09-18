import React from 'react';
import SelfTypingText from './SelfTypingText';


export const defaultTyping = () => {
    return (
        <SelfTypingText>
            Lorem ipsum dolor sit amew
        </SelfTypingText>
    )
}

export const withBackspace = () => {
    return (
        <SelfTypingText backspaceCount={4} backspace="done">
            Lorem ipsum dolor sit amew
        </SelfTypingText>
    )
}

export default {
    title: 'Atoms/SelfTypingText'
}