import { FormEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';

interface AddNewCategoryProps {
    currentCategories: Array<string>;
    onAddNewCategory: ( category : string ) => void;
}

export const AddNewCategory = ( { currentCategories, onAddNewCategory } : AddNewCategoryProps ) => {

    const [ isSame, setIsSame ] = useState<Boolean>( false );
    
    const { category, handleInputChange, handleReset } = useForm({
        category: ''
    });

    const handleSubmit = ( event : FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        
        const newCategory = category.trim();

        if ( newCategory.length < 2 ) return;

        if ( currentCategories.map( currentCategory => currentCategory.toLowerCase() ).includes( newCategory.toLowerCase() ) ) {
            setIsSame( true );
            return;
        }

        if ( isSame ) setIsSame( false );

        onAddNewCategory( newCategory );
        handleReset();
    };

    return (
        <form
            onSubmit={ handleSubmit }
            >
            <label> What are you thinking </label>
            <input
                type="text"
                name="category"
                value={ category }
                onChange={ handleInputChange }
                />
            {
                isSame 
                    && 
                ( <p> You already have this category </p> )
            }
            <button type="button"> Search </button>
        </form>
    );
};
