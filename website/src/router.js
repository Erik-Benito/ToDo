import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Message from './pages/message/';
import Pag404 from './pages/pag404/';

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact="true" path="/message" element={<Message />} />
        <Route path="/*" element={<Pag404 />} />
      </Routes>
    </BrowserRouter>
  );
}
