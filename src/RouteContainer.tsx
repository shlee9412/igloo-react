import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contacts from './pages/Contacts';
import Counter from './pages/Counter';
import IndexList from './pages/IndexList';
import ReduxCounter1 from './pages/ReduxCounter1';
import ReduxCounter2 from './pages/ReduxCounter2';
import SignUp from './pages/SignUp';
import TimeInterval from './pages/TimeInterval';

const RouteContainer = () => {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<IndexList />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/timeInterval" element={<TimeInterval />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/redux-counter1" element={<ReduxCounter1 />} />
        <Route path="/redux-counter2" element={<ReduxCounter2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteContainer;
