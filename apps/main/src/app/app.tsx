import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DashboardSuccessContainer from './components/DashboardSuccessContainer';

const Ecommerce = React.lazy(() => import('ecommerce/Module'));
const Receipe = React.lazy(() => import('receipe/Module'));
const Blog = React.lazy(() => import('blog/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <span className="text-2xl mr-2">🛍️</span>
            <h1 className="text-2xl font-bold text-gray-800">Good Price</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Link 
              to="/ecommerce" 
              className="block p-6 bg-pink-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">E-commerce Service</h2>
              <p className="text-gray-600">Gérez vos produits et ventes en ligne</p>
            </Link>

            <Link 
              to="/receipe" 
              className="block p-6 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Tips & Recipes Service</h2>
              <p className="text-gray-600">Découvrez des recettes et astuces</p>
            </Link>

            <Link 
              to="/blog" 
              className="block p-6 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Discovery / News Service</h2>
              <p className="text-gray-600">Explorez les dernières actualités</p>
            </Link>
          </div>

          <Link 
            to="/dashboard" 
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
          >
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          </Link>
        </div>

        <Routes>
          <Route path="/" element={null} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/receipe" element={<Receipe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<DashboardSuccessContainer />} />
        </Routes>
      </div>
    </React.Suspense>
  );
}

export default App;
