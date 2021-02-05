import {render, screen} from "@testing-library/react";
import MyButton from "./index";

describe('MyButton', () => {


    beforeEach(() => {
        render(<MyButton text="BlaBla"/>)
    })

    it('should render a button with the passed text', () => {
        const button = screen.getByRole('button');

        expect(button).toHaveTextContent('BlaBla')
    })


})