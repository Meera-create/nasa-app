import { render, screen } from '@testing-library/react';
import SearchResults from '../components/searchResults';
import React from 'react';



describe("tests search results",()=>{
    const{asFragment}=render(<SearchResults />);

    it("renders correctly",()=>{
        expect(asFragment()).toMatchSnapshot();
    });
    
});