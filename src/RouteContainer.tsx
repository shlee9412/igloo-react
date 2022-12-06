import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './Counter';
import Header from './Header';
import IndexList from './IndexList';

const RouteContainer = () => {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<IndexList />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteContainer;