import {render, screen, within} from "@testing-library/react";
import MyRedButton from "./index";
import userEvent from "@testing-library/user-event";

describe('MyRedButton', () => {


    beforeEach(() =>{
        render(<MyRedButton text="BlaBla"/>)
    })

    it('should render a button with the passed text', () => {
        const button = screen.getByRole('button');

        expect(button).toHaveTextContent('BlaBla')
    })

    xit('should turn red when clicked', () =>{
        const button = screen.getByRole('button');

        userEvent.click(button)

        expect(button).toHaveStyle('background-color: red')
    })



})