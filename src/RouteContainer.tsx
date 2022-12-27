import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contacts from './pages/Contacts';
import Counter from './pages/Counter';
import IndexList from './pages/IndexList';
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
      </Routes>
    </BrowserRouter>
  );
};

export default RouteContainer;
