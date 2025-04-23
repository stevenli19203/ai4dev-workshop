import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
  icon: string;
}

const CATEGORIES: Category[] = [
  { id: '1', name: 'Fruits & Légumes', slug: 'fruits-legumes', color: 'bg-green-100', icon: '🥬' },
  { id: '2', name: 'Produits Laitiers', slug: 'produits-laitiers', color: 'bg-blue-100', icon: '🥛' },
  { id: '3', name: 'Boulangerie', slug: 'boulangerie', color: 'bg-yellow-100', icon: '🥖' },
  { id: '4', name: 'Viandes', slug: 'viandes', color: 'bg-red-100', icon: '🥩' },
  { id: '5', name: 'Boissons', slug: 'boissons', color: 'bg-purple-100', icon: '🥤' },
  { id: '6', name: 'Épicerie', slug: 'epicerie', color: 'bg-orange-100', icon: '🏪' },
];

const Categories: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = CATEGORIES.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryClick = (slug: string) => {
    navigate(`/products/${slug}`);
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => window.history.back()}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <span className="text-xl">←</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Catégories</h1>
          </div>
          
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <span className="text-xl">🛒</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Rechercher une catégorie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.slug)}
              className={`${category.color} p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer transform hover:scale-105`}
            >
              <div className="text-4xl mb-3 text-center">{category.icon}</div>
              <h2 className="text-center font-medium text-gray-800">
                {category.name}
              </h2>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Aucune catégorie trouvée pour "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories; 