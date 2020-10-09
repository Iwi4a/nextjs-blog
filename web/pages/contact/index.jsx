import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm';
import { Button, FixedBackground, Logo } from '../../storybook';
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

const PageHeaderTextWrapper = style.div`
    position: relative;
    padding: 0 15px;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    @media screen and (min-width: 768px) {
        left: 75px; 
    }
    svg {
        @media screen and (max-width: 768px) {
            transform: scale(0.6);
        }
    }
    h1 {
        color: white;
        display: inline-block;
        font-size: 25px;
        font-weight: 300;
        margin-left: 10px;
        @media screen and (min-width: 768px) {
            font-size: 40px;
            margin-left: 50px;
        }
    }
`;
const AboutContainer = style.section`
    max-width: 1200px;
    padding: 50px 15px;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
        display: flex;
        column-gap: 30px;
        align-items: center;
        & > div {
            max-width: 50%;
            width: 100%;
            margin: auto;
        }
    }
    img {
        border-radius: 10px;
        filter: grayscale(100%);
        transition: all .2s ease-in-out;
        margin-bottom: 25px;
        max-width: 400px;
        width: 100%;
        &:hover {
            filter: none;
        }
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0 0 30px;
        li {
            margin: 0 0 10px;
            h3 {
                margin: 0;
                font-size: 18px;
                font-weight: 400;
            }
            h4 {
                margin: 0;
                font-size: 14px;
                font-weight: 400;
            }
        }
    }
    .CVText {
        p {
            font-size: 18px;
        }
    }
    .btn {
        margin-left: -10px;
    }
`;
const FormContainer = style.section`
    padding: 20px 15px 40px;
    background-color: #f8f5f2;
    .title-wrapper {
        text-align: center;
        p {
            color: #414a50;
            font-size: 18px;
        }
    }
`;

class Contact extends Component {

    render() {
        const pageHeader = {
            image: this.props.page.acfHeader.headerImage.mediaItemUrl,
            message: this.props.page.acfHeader.headerMsg,
        };
        const AboutContactImage = this.props.page.acfContact.contactProfile.mediaItemUrl; 
        const contactBottomBackgroundImage = this.props.page.acfContact.contactBottom.mediaItemUrl;
        const CVText = this.props.page.content;
        const CVURL = this.props.page.acfContact.cvLink.mediaItemUrl;
        return (
            <>
                <FixedBackground
                    image={pageHeader.image}
                    style={{
                        backgroundSize: "auto",
                    }}
                    height="60vh">
                        <PageHeaderTextWrapper>
                            <Logo />
                            <h1 dangerouslySetInnerHTML={{ __html: pageHeader.message }} />
                        </PageHeaderTextWrapper>
                </FixedBackground>
                <AboutContainer>
                    <div>
                        {AboutContactImage ? <img src={AboutContactImage} /> : null}
                    </div>
                    <div>
                        <ul>
                            {this.props.page.acfContact.contactDetails.map(e => {
                                return (
                                    <li key={e.title}>
                                        <h4>{e.title}</h4>
                                        <h3>{e.details}</h3>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="CVText" dangerouslySetInnerHTML={{ __html: CVText}} />
                        <Button type="main" icon="download" target="_blank" href={CVURL}>
                            DOWNLOAD CV
                        </Button>
                    </div>
                </AboutContainer>
                <FormContainer>
                    <div className="title-wrapper" dangerouslySetInnerHTML={{ __html: this.props.page.acfContact.contactFormText}} />
                    <ContactForm />
                </FormContainer>
                <FixedBackground
                    image={contactBottomBackgroundImage}
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