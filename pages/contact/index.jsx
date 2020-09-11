import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm';
import {FixedBackground} from '../../storybook';
import { getContactpageData } from '../../lib/api';
import style from 'styled-components';


export async function getStaticProps() {
    const res = await getContactpageData();
    return {
        props: {
            ...res.data
        }
    }
}

const FormContainer = style.section`
    padding: 20px 15px 40px;
    background-color: #f8f5f2;
`;
const FormTitle = style.div`
    text-align: center;
    p {
        color: #414a50;
        font-size: 18px;
    }
`;

class Contact extends Component {

    render() {
        return (
            <>
                <FixedBackground
                    image={this.props.page.acfHeader.headerImage.mediaItemUrl}
                    style={{
                        backgroundSize: "auto",
                    }}
                    height="60vh" />
                <FormContainer>
                    <FormTitle dangerouslySetInnerHTML={{ __html: this.props.page.acfContact.contactFormText}} />
                    <ContactForm />
                </FormContainer>
                <FixedBackground
                    image={this.props.page.acfContact.contactBottom.mediaItemUrl}
                    style={{
                        backgroundPosition: "0 100%",
                        backgroundSize: "auto"
                    }}
                    height="200px" />
            </>
        )
    }
}

export default Contact;