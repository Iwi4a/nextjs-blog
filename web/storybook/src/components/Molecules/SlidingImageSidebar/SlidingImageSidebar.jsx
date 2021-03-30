import React, { useEffect, useRef, useState } from 'react';
import ImageSidebar from '../../Atoms/ImageSidebar/ImageSidebar';
import { getElementCoordinates } from '../../../../../lib/utilities';
import './style.scss';

const SlidingImageSidebar = (props) => {
    const slidingEl = useRef();
    const [ topValue, setTopValue ] = useState(0);
    let slidingElTop;

    useEffect(() => {
        if (window !== undefined) {
            window.addEventListener('scroll', scrollHandler);
            window.addEventListener('resize', resetHandler);
            if (slidingEl.current != undefined && slidingEl.current != null) {
                slidingElTop = getElementCoordinates(slidingEl.current);
            }
        }
        return () => {
            window.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('resize', resetHandler);
        }
    }, []);

    const scrollHandler = () => {
        if (slidingEl.current != undefined) {
            const winTop = window.pageYOffset;
            if (winTop > Math.abs(slidingElTop.top)) {
                setTopValue(winTop - Math.abs(slidingElTop.top) + 100);
            } else {
                setTopValue(0);
            }
        }
    }

    const resetHandler = () => {
        setTopValue(0);
        setTimeout(() => {
            scrollHandler();
        }, 1000);
    }
    return (
        <div ref={slidingEl} style={{ top: `${topValue}px` }} className="SlidingImageSidebar">
            <ImageSidebar {...props} />
        </div>
    )
}

export default SlidingImageSidebar;