import { Route, Routes } from 'react-router';
import Categories from "./components/Categories";
import Products from "./components/Products";
import { MemoryRouter } from 'react-router-dom';

export function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MemoryRouter>
        <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/:category" element={<Products />} />
          </Routes>
      </MemoryRouter>
    </div>
  );
}

export default App;
