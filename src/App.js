import CitySearch from './components/CitySearch';
 import EventList from './components/EventList';
 import NumberOfEvents from './components/NumberOfEvents';
 import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
 import { useEffect, useState } from 'react';
 import { extractLocations, getEvents } from './api';
 import CityEventsChart from './components/CityEventsChart';
 import EventGenresChart from './components/EventGenresChart';
 import './App.css';
function App() {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
   const [currentCity, setCurrentCity] = useState("See all cities");
   const [infoAlert, setInfoAlert] = useState("");
   const [errorAlert, setErrorAlert] = useState("");
   const [warningAlert, setWarningAlert] = useState("");

   useEffect(() => {
     if (navigator.onLine) {
       setWarningAlert("");
     } else {
       setWarningAlert("You are offline. The displayed list may not be up to date.");
     }
     fetchData();
   }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    let filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    // Check to see if there are events and allEvents count
    if (currentNOE && currentNOE < filteredEvents.length) {
      filteredEvents = filteredEvents.slice(0, currentNOE)
    }
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }
  
  return (
    <div className="App">
      <h1>Meet App</h1>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert} />
      <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />
      <div className="charts-container">
      <EventGenresChart events={events} />
      <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} />
    </div>
 );
}
export default App;