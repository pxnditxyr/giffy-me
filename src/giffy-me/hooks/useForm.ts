import { ChangeEvent, useState } from 'react';

export const useForm = <T extends Object> ( initialState : T ) => {
    const [ form, setForm ] = useState( initialState );

    const handleInputChange = ( { target } : ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = target;
        setForm({
            ...form,
            [ name ]: value
        })
    };

    const handleReset = () => setForm( initialState );

    return {
        form,
        handleInputChange,
        handleReset,
        ...form
    };
};
