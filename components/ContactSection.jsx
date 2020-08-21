import React, { Component } from 'react';
import Link from 'next/link';
import { Button } from '../storybook';
import styles from 'styled-components';


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

class ContactSectionComponent extends Component {
    render() {
        return (
            <ContactSection>
                <Container>
                    {/* <h4>{this.props.children}</h4> */}
                    <a target="_blank" href={this.props.cv}>
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
}

ContactSectionComponent.defaultProps = {
    cv: "#"
}

export default ContactSectionComponent;
