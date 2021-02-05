import {render, screen, waitFor} from "@testing-library/react";
import MyAsyncButton from "./index";
import {setupServer} from "msw/node";
import {rest} from "msw";
import userEvent from "@testing-library/user-event";

describe('MyAsyncButton', () => {
    const server = setupServer(
        rest.get('/text', (req, res, ctx) => {
            return res(ctx.json('newText'))
        }),
    )

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())


    beforeEach(() => {
        render(<MyAsyncButton text="BlaBla"/>)
    })

    it('should render a button with the passed text', () => {
        const button = screen.getByRole('button');

        expect(button).toHaveTextContent('BlaBla')
    })

    xit('should change the text of the button after fetching it from the backend', async () =>{
        const button = screen.getByRole('button');

        userEvent.click(button)

        await waitFor(() =>{
            expect(button).toHaveTextContent('newText')
        })
    })


})