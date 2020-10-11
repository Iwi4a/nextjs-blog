import Message from './Message';

export const successMessage = () => <Message type="success">This is a successfull message</Message>
export const pendingMessage = () => <Message type="pending">This is a pending message</Message>
export const errorMessage = () => <Message type="error">This is an error message</Message>

export default {
    title: 'Atoms/Message'
}