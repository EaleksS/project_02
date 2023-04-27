import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Main } from './pages/Main';
import { Products } from './pages/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/catalog" element={<Main />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
