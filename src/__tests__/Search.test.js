import { render, screen } from '@testing-library/react';
import Search from '../components/Search';



describe("tests search box",()=>{
    const{asFragment}=render(<Search />);

    it("renders correctly",()=>{
        expect(asFragment()).toMatchSnapshot();
    });
    
});