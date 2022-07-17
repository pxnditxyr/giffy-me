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
        <main className="w-full flex justify-center items-center flex-col">
            <h1 className="text-8xl font-sans font-bold text-white py-8 text-center"> Giffy Me </h1>
            <AddNewCategory
                currentCategories={ categories }
                onAddNewCategory={ onAddNewCategory }
                />
            <ol className="w-full">
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                            />
                    ))
                }
            </ol>
        </main>
    );
};
