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
            className="flex flex-col items-center justify-center w-full py-3 px-8"
            >
            <div className="flex flex-col gap-8">
                <label className="text-amber-400 font-semibold text-3xl"> What are you thinking? </label>
                <div className="flex flex-col gap-5 md:flex-row">
                    <input
                        type="text"
                        className="bg-gray-800 text-white font-semibold text-3xl py-2 px-4 rounded-lg w-full focus:outline-none md:w-2/3"
                        name="category"
                        value={ category }
                        onChange={ handleInputChange }
                        placeholder="Add a new category"
                        />
                    
                    <button
                        type="button"
                        className="bg-gray-800 text-white font-semibold text-3xl py-2 px-4 rounded-lg w-full md:w-1/3"
                    > Search </button>
                </div>
                {
                    isSame 
                        && 
                    ( <p className="text-red-500 text-center text-xl"> This category already exists </p> )
                }
            </div>
        </form>
    );
};
