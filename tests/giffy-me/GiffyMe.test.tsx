import { render } from '@testing-library/react';
import { GiffyMe } from '../../src/giffy-me/GiffyMe';


describe( 'tests in GiffyMe component', () => {
    test( 'should render GiffyMe component', () => {
        const { container } = render( <GiffyMe /> );
        expect( container ).toMatchSnapshot();
    });
});
