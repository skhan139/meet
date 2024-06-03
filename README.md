Project Description

The Meet app is a progressive web application featuring a serverless backend, allowing offline access to upcoming events in selected cities. Its responsive design guarantees a consistent display on various devices, enhancing the user experience. Built with Test-Driven Development, it emphasizes code quality and comprehensive test coverage for optimal functionality.

User Stories

As a user, I want to filter events by city so that I can view a list of events occurring in that city.
As a user, I want to toggle event details on and off so that I can control the amount of information displayed.
As a user, I want to specify the number of events displayed so that I can easily browse a manageable list of events.
As a user, I want to use the app offline so that I can access the events list and related information at all times.
As a user, I want to add a shortcut to my home screen so that I can quickly access the app.
As a user, I want to see charts visualizing event details so that I can better understand the event data and make informed decisions.
Scenarios

SCENARIO 1
When the user hasn't searched for a specific city, show upcoming events from all cities.

Given: The user hasn’t searched for any city;
When: The user opens the app;
Then: The user should see a list of upcoming events.
SCENARIO 2
The user should see a list of suggestions when searching for a city.

Given: The main page is open;
When: The user starts typing in the city textbox;
Then: The user should receive a list of city suggestions that match the input.
SCENARIO 3
The user can select a city from the suggested list.

Given: The user was typing “Berlin” in the city textbox and the list of suggested cities is visible;
When: The user selects a city (e.g., “Berlin, Germany”) from the list;
Then: The city should change to the selected city (i.e., “Berlin, Germany”) and the user should see a list of upcoming events in that city.
SCENARIO 4
The user can expand an event to show more details.

Given: The user has decided to view more details about an event;
When: The user clicks on a button or card;
Then: The user should see more details about the event.
SCENARIO 5
The user has specified a number of events to be displayed.

Given: The user selected a city, for example, "Berlin" from the list;
When: The user clicks on the city;
Then: The user should see a specific number of events, 32 at a time.
SCENARIO 6
The user can use the app offline with a shortcut on the home screen.

Given: The user clicked on the shortcut;
When: The user clicks on the shortcut;
Then: The user should be able to use the app offline and see events for a selected city (e.g., “Berlin, Germany”).
SCENARIO 7
The user can create a home screen shortcut.

Given: The user clicked on the "Create home shortcut" button;
When: The user clicks on the "Create home shortcut" button;
Then: The user should be able to find the shortcut on the home screen.
SCENARIO 8
The user can view chart visualizations for event details.

Given: The user selects an event of interest and navigates to the event page, noticing a chart visualization option;
When: The user taps on the chart visualization icon;
Then: The user should see a graphical representation of attendance trends, ticket prices, or event popularity over time.
Use of Serverless Functions

Serverless functions are employed in the Meet app to handle backend operations without maintaining server infrastructure. For instance, when users request information about upcoming events or filter events by city, serverless functions process these requests by retrieving data from the database. Utilizing serverless architecture ensures scalability, cost-effectiveness, and efficient resource use, enabling seamless access to event information regardless of the user's location or network connectivity.

Run this Project Locally

Clone this repository.
Navigate to the project directory:
sh
Copy code
cd project-folder
Install dependencies:
sh
Copy code
npm install
Run on localhost:3000:
sh
Copy code
npm run start





