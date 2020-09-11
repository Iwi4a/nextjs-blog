import { TextInput, TextArea } from './FormFields';

export const textInput = () => <TextInput value="simple test" />

export const textArea = () => <TextArea value="simple test" />

export default {
    title: 'Atoms/FormFields',
    parameters: {
        backgrounds: {
            default: 'Dark',
            values: [
                { name: 'Dark', value: '#ccc', }
            ],
        }
    }
}