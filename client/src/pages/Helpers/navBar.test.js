import {render, fireEvent} from '@testing-library/react';
import NavBar from '../components/navBar';

it('check nav render', () =>{
    const {queryByTitle} = render(<NavBar/>);
    const nav = queryByTitle('navBar');
    expect(nav).toBeTruthy();
})

describe("click")