import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '../storybook';
import styles from 'styled-components';

const ContactSection = ({ cv, children, ...rest}) => {

    const ContactSection = styles.section`
        padding: 50px 0 80px;
    `;

    const Container = styles.div`
        max-width: 1200px;
        border-top: 1px solid #ccc;
        padding: 40px 15px 0;
        margin: 0 auto;
        text-align: center;
    `;

    return (
        <ContactSection>
            <Container>
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
            </Container>
        </ContactSection>
    )
}

ContactSection.defaultProps = {
    cv: "#"
}

export default ContactSection;
