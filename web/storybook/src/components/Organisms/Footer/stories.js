import React from 'react';
import Footer from './Footer';
import SVG from '../../Atoms/SVG/SVG';

export const Basic = () => {
    return (
        <Footer>
            <a href="https://www.linkedin.com/"><SVG icon="linkedin" /></a>
            <a href="https://facebook.com/"><SVG icon="facebook" /></a>
            <a href="https://github.com/"><SVG icon="github" /></a>
            <a href="mailto:ivelin.iliev@hotmail.com"><SVG icon="email" /></a>
        </Footer>
    )
}

export default { 
    title: 'Organisms/Footer',
};