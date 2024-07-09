import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents.js';
import { extractLocations, getEvents } from '../api';
import App from "../App";
describe('<NumberOfEvents /> component', () => {
     let NumberOfEventsComponent;
     let getByTestId;
     beforeEach(() => {
         NumberOfEventsComponent = render(<NumberOfEvents
             setErrorAlert={() => { }} />);
         getByTestId = NumberOfEventsComponent.getByTestId
     });

    test('renders text input', () => {
        const eventNumberInput = getByTestId('event-number-input');
        expect(eventNumberInput).toBeInTheDocument();
    });
    test("default number in text box is 32", () => {
        const eventNumberInput = getByTestId('event-number-input');
        // Expect the default value of the input field to be '32'
        expect(eventNumberInput).toHaveValue(32);
    });
    test('should allow the user to change the number of events displayed', async () => {
        const eventNumberInput = getByTestId('event-number-input');
        // Simulate user input to change the number of events to be displayed
        const user = userEvent.setup();
        await user.type(eventNumberInput, '{backspace}{backspace}10');
        // Expect the number of events to be equal to the user-specified number (10 in this case)
        expect(eventNumberInput).toHaveValue(10);
    });
    test('contains an element with the role of textbox', () => {
        const { getByRole } = NumberOfEventsComponent;
        const textbox = getByRole('textbox');
        expect(textbox).toBeInTheDocument();
    });
});
describe('<NumberOfEvents /> integration', () => {
    test('user can change the number of events displayed', async () => {
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list');
        const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
        const user = userEvent.setup();
        const eventNumberInput = within(NumberOfEventsDOM).queryByRole('textbox');
        await user.type(eventNumberInput, '{backspace}{backspace}10');
        await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(10);
        });
    });
})