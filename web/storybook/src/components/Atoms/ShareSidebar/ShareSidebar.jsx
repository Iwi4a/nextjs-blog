import React from 'react';
import PropTypes from 'prop-types';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton
} from 'react-share';
import SVG from '../SVG/SVG';
import { useRouter } from 'next/router';
import './style.scss';

const ShareSidebar = ({ url, image, text, ...rest }) => {
    const shortIntro = "I found this very useful, check it out!";
    return (
        <div className="ShareSidebar" {...rest}>
            <div style={{ backgroundImage: `url("${image}")`}} className="ShareSidebar__image"></div>
            <div className="ShareSidebar__wrapper">
                <div className="ShareSidebar__wrapper__text">
                    {text}
                </div>
                <div className="ShareSidebar__wrapper__share-buttons">
                    
                    <EmailShareButton url={url} subject={shortIntro}>
                        <SVG icon="email" />
                    </EmailShareButton>
                    <LinkedinShareButton url={url} summary={shortIntro}>
                        <SVG icon="linkedin" />
                    </LinkedinShareButton>
                    <FacebookShareButton url={url} quote={shortIntro}>
                        <SVG icon="facebook" />
                    </FacebookShareButton>
                    <TwitterShareButton url={url} caption={shortIntro}>
                        <SVG icon="twitter" />
                    </TwitterShareButton>
                </div>
            </div>
            
        </div>
    )
}

ShareSidebar.propTypes = {
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string,
}

export default ShareSidebar
