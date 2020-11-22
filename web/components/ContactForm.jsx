import React, { useState } from 'react';
import { Formik, Form, useField } from 'formik';
import ReCAPTCHA from "react-google-recaptcha";
import styled from 'styled-components';
import * as Yup from 'yup';
import { 
    Button,
    Message,
    TextArea as StyledTextArea,
    TextInput as StyledTextInput
} from '../storybook';

const FormWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const StyledFieldGroup = styled.div`
    position: relative;
    padding-top: 20px;
    margin-bottom: 15px;
    width: 100%;
`;

const StyledError = styled.p`
    display: block;
    color: red;
    font-size: 10px;
    position: absolute;
    top: 0;
    left: 5px;
    margin: 0;
`;

const FieldsWrapper = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        flex-flow: row nowrap;
        column-gap: 15px;
    }
`;

const SubmitButtonWrapper = styled.div`
    text-align: right;
    margin-top: 25px;
`;

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;
    return (
        <StyledFieldGroup>
            <StyledTextInput className={hasError ? 'error' : ''} {...field} {...props} />
            { meta.touched && meta.error ? (
                <StyledError>{meta.error}</StyledError>
            ) : null }
        </StyledFieldGroup>
    )
}

const TextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;
    return (
        <StyledFieldGroup>
            <StyledTextArea className={hasError ? 'error' : ''} {...field} {...props}></StyledTextArea>
            { hasError ? (
                <StyledError>{meta.error}</StyledError>
            ) : null }
        </StyledFieldGroup>
    )
}

const ContactForm = (props) => {
    const [formState, setFormState] = useState({
        submitted: false,
        submitting: false,
        error: false,
    });
    const [verified, setVerification] = useState(false);

    const handleVerify = () => {
        setVerification(true);
    }

    const handleExpiredVerify = () => {
        setVerification(false);
    }

    const handleOnSubmit = async values => {
        const res = await fetch('/api/mail', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values.name,
                email: values.email,
                telephone: values.telephone,
                message: values.message
            })
        })
        const data = await res;
        if (data.status > 300) {
            setFormState({ ...formState, submitting: false, error: true });
        } else {
            setFormState({ ...formState, submitting: false, submitted: true });
        }
    }
    const onKeyDown = (keyEvent) => {
        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
            keyEvent.preventDefault();
        }
    }

    return (
        <FormWrapper>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    telephone: '',
                    message: '',
                }}
                validationSchema = {
                    Yup.object().shape({
                        name: Yup.string()
                            .min(2, 'First name should be longer than a character')
                            .required('Name is required'),
                        email: Yup.string()
                            .email()
                            .required('Email is required'),
                        telephone: Yup.number()
                            .min(6, 'Please enter a valid number')
                            .required('Telephone number is required'),
                        message: Yup.string()
                })}
                onSubmit = {(values) => {
                    //Handle submissionn
                    setFormState({ ...formState, submitting: true });
                    handleOnSubmit(values);
                }}
            >  
                <Form onKeyDown={onKeyDown}>
                    <IsFormSubmittedHOC formState={formState}>
                        <FieldsWrapper>
                            <TextInput 
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"/>
                            <TextInput 
                                type="email"
                                id="email"
                                name="email"
                                placeholder="E-mail"/>
                            <TextInput 
                                type="text"
                                id="telephone"
                                name="telephone"
                                placeholder="Telephone"/>
                        </FieldsWrapper>
                        <TextArea
                            placeholder="Message"
                            style={{
                                minHeight: '120px',
                                resize: 'none',
                            }}
                            name="message"
                            id="message" />
                        <div style={{ textAlign: 'right' }}>
                            <ReCAPTCHA style={{ display: 'inline-block' }} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleVerify} onExpired={handleExpiredVerify} />
                        </div>
                        <SubmitButtonWrapper>
                            <Button btnType="secondary" icon="contact" disabled={!verified} type="submit">Submit</Button>
                        </SubmitButtonWrapper>
                    </IsFormSubmittedHOC>
                </Form>
            </Formik>
        </FormWrapper>

    )
}

const IsFormSubmittedHOC = ({ children, formState }) => {
    if (formState.submitting) {
        return <Message type="pending">Your message is on its way to me...</Message>
    }
    if (formState.submitted) {
        return <Message type="success">Your message has been submitted. I will get back to you very soon!</Message>
    }
    if (formState.error) {
        return <Message type="error">There has been an error submitting your message. Please, try again.</Message>
    }
    return children;
}

export default ContactForm
