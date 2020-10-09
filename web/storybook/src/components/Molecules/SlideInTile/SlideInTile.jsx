import React from 'react';
import TrackVisibility from 'react-on-screen';
import Tile from '../../Atoms/Tile/Tile';
import './SlideInTile.scss';

const SlideInTile = (props) => {
    return (
        <TrackVisibility once>
            {({isVisible}) => {
                return <Tile className={`SlideInTile ${isVisible ? 'SlideInTile--onscreen' : ''}`} {...props} />;
            }}
            
        </TrackVisibility>
    )
}

export default SlideInTile
