import React from 'react';
import { Formik, Form, useField } from 'formik';
import style from 'styled-components';
import * as Yup from 'yup';
import { 
    Button,
    TextArea as StyledTextArea,
    TextInput as StyledTextInput
} from '../storybook';


const FormWrapper = style.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const StyledFieldGroup = style.div`
    position: relative;
    padding-top: 20px;
    margin-bottom: 15px;
    width: 100%;
`;
const StyledError = style.p`
    display: block;
    color: red;
    font-size: 10px;
    position: absolute;
    top: 0;
    left: 5px;
    margin: 0;
`;

const FieldsWrapper = style.div`
    @media screen and (min-width: 768px) {
        display: flex;
        flex-flow: row nowrap;
        column-gap: 15px;
    }
`;

const SubmitButtonWrapper = style.div`
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

const ContactForm = () => {
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
                onSubmit = {(values, { setSubmitting }) => {
                    //Handle submission
                    console.log(values);
                }}
            >
                <Form>
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
                    <SubmitButtonWrapper>
                        <Button type="secondary" icon="contact">Submit</Button>
                    </SubmitButtonWrapper>
                </Form>
            </Formik>
        </FormWrapper>
    )
}

export default ContactForm
