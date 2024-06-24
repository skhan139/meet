import { render } from '@testing-library/react';
import mockData from '../mock-data';
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';

describe('<Event /> component', () => {
  let EventComponent;
  const event = mockData[0];

  beforeEach(() => {
    EventComponent = render(<Event event={event} />);
  });

  test('has event title', () => {
    expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
  });

  test('has event created time', () => {
    // Ensure the format matches what is rendered in the component
    const eventCreatedTime = new Date(event.created).toUTCString();
    expect(EventComponent.queryByText(eventCreatedTime)).toBeInTheDocument();
  });

  test('has event location', () => {
    expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
  });

  test('has button show details', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });

  test('by default, events details section should be hidden', () => {
    const details = EventComponent.container.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  });

  test('shows details section, when user clicks show details button', async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText('show details');
    await user.click(button);
    const details = EventComponent.container.querySelector('.details');
    expect(details).toBeInTheDocument();
  });

  test('hide details section, when user clicks hide details button', async () => {
    const user = userEvent.setup();
    const showButton = EventComponent.queryByText('show details');
    
    // First click to show details
    await user.click(showButton);
    const details = EventComponent.container.querySelector('.details');
    expect(details).toBeInTheDocument();
    
    // Click to hide details
    const hideButton = EventComponent.queryByText('hide details');
    await user.click(hideButton);
    expect(details).not.toBeInTheDocument();
  });
});
