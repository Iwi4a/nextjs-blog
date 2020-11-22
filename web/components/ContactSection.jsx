import React, { Component } from 'react';
import Link from 'next/link';
import { Button } from '../storybook';
import styled from 'styled-components';


const ContactSection = styled.section`
    padding: 50px 0 80px;
`;

const Container = styled.div`
    max-width: 1200px;
    border-top: 1px solid #ccc;
    padding: 40px 15px 0;
    margin: 0 auto;
    text-align: center;
    .btn {
        margin-bottom: 10px;
    }
`;

class ContactSectionComponent extends Component {
    render() {
        return (
            <ContactSection>
                <Container>
                    {/* <h4>{this.props.children}</h4> */}
                    <Button btnType="main" icon="download" target="_blank" href={this.props.cv}>
                        DOWNLOAD CV
                    </Button>
                    <Link href="/contact">
                        <a>
                            <Button btnType="secondary" icon="contact">
                                Contact
                            </Button>
                        </a>
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
