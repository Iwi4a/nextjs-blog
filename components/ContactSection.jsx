import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '../storybook';
import '../styles/components/ContactSection.scss';

const ContactSection = ({ cv, children, ...rest}) => {
    return (
        <div className="ContactSection">
            <div className="ContactSection__container">
                {/* <h4>{children}</h4> */}
                <a target="_blank" href={cv}>
                    <Button type="main" icon="download">
                        DOWNLOAD CV
                    </Button>
                </a>
                <Link href="/contact">
                    <Button type="secondary" icon="contact">
                        Contact
                    </Button>
                </Link>
            </div>
        </div>
    )
}

ContactSection.defaultProps = {
    cv: "#"
}

export default ContactSection;
