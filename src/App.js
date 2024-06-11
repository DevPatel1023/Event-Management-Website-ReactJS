import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import EventList from './Components/EventList';
import EventDetails from './Components/EventDetails';
import FilteredEvents from './Components/FilteredEvents';
import Header from './Components/Header';
import CreateEvent from './Components/CreateEvent';
import ManageSchedule from './Components/ManageSchedule';
import ContactSupport from './Components/ContactSupport';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/filtered-events" element={<FilteredEvents />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/manage-schedule" element={<ManageSchedule />} />
          <Route path="/contact-support" element={<ContactSupport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
