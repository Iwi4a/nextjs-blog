import React, { useEffect, useRef, useState } from 'react';
import ShareSidebar from '../../Atoms/ShareSidebar/ShareSidebar';
import { getElementCoordinates } from '../../../../../lib/utilities';
import './style.scss';

const SlidingShareSidebar = (props) => {
    const slidingEl = useRef();
    const [ topValue, setTopValue ] = useState(0);
    let slidingElTop;

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        if (slidingEl.current != undefined && slidingEl.current != null) {
            slidingElTop = getElementCoordinates(slidingEl.current);
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

    return (
        <div ref={slidingEl} style={{ top: `${topValue}px` }} className="SlidingShareSidebar">
            <ShareSidebar {...props} />
        </div>
    )
}

export default SlidingShareSidebar;