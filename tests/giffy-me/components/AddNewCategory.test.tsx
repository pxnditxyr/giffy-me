import { fireEvent, render, screen } from '@testing-library/react';

import { AddNewCategory } from '../../../src/giffy-me/components/AddNewCategory';

describe( 'tests in AddNewCategory Component', () => {
    const currentCategories : Array<string> = [];

    test( 'should render AddNewCategory component', () => {

        const onAddNewCategory = jest.fn();
        const { container } = render( <AddNewCategory currentCategories={ currentCategories } onAddNewCategory={ onAddNewCategory } /> );
        expect( container ).toMatchSnapshot();
    });

    test( 'should execute onAddNewCategory function', () => {
        const onAddNewCategory = jest.fn();
        render( <AddNewCategory currentCategories={ currentCategories } onAddNewCategory={ onAddNewCategory } /> );
        const input : HTMLInputElement = screen.getByRole( 'textbox' );
        fireEvent.input( input, { target: { value: 'Naruto' } } );
        expect( input.value ).toBe( 'Naruto' );
    });

    test( 'should call onAddNewCategory if input has a value that has length greater than or equal to 2', () => {

        const onAddNewCategory = jest.fn();
        const inputValue = 'Naruto';

        render( <AddNewCategory currentCategories={ currentCategories } onAddNewCategory={ onAddNewCategory } /> );

        const input : HTMLInputElement = screen.getByRole( 'textbox' );
        const form : HTMLFormElement = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe( '' );

        expect( onAddNewCategory ).toHaveBeenCalled();
        expect( onAddNewCategory ).toHaveBeenCalledTimes( 1 );
        expect( onAddNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    test( 'should not call onAddNewCategory if input has a value that has length less than 2', () => {

        const onAddNewCategory = jest.fn();
        const inputValue = 'x';
        
        render( <AddNewCategory currentCategories={ currentCategories } onAddNewCategory={ onAddNewCategory } /> )

        const input : HTMLInputElement = screen.getByRole( 'textbox' );
        const form : HTMLFormElement = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( onAddNewCategory ).not.toHaveBeenCalled();
    });

});
