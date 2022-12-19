import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Jobs } from '../pages/Jobs';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
};
