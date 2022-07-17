import { useState } from 'react';
import { AddNewCategory, GifGrid  } from './components';

export const GiffyMe = () => {


    const [ categories, setCategories ] = useState<Array<string>>([]);

    const onAddNewCategory = ( newCategory : string ) => {
        setCategories([
            newCategory,
            ...categories
        ])
    };

    return (
        <>
            <h1> Giffy Me </h1>
            <AddNewCategory
                currentCategories={ categories }
                onAddNewCategory={ onAddNewCategory }
                />
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                            />
                    ))
                }
            </ol>
        </>
    );
};
