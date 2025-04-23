import React, { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

const PRODUCTS: Product[] = [
  // Fruits & Légumes
  { id: '1', name: 'Pommes Bio', price: 2.99, category: 'Fruits & Légumes', image: '🍎' },
  { id: '2', name: 'Bananes', price: 1.99, category: 'Fruits & Légumes', image: '🍌' },
  { id: '3', name: 'Carottes', price: 1.49, category: 'Fruits & Légumes', image: '🥕' },
  { id: '4', name: 'Tomates', price: 2.49, category: 'Fruits & Légumes', image: '🍅' },
  { id: '5', name: 'Laitue', price: 1.29, category: 'Fruits & Légumes', image: '🥬' },
  { id: '6', name: 'Oranges', price: 3.99, category: 'Fruits & Légumes', image: '🍊' },

  // Produits Laitiers
  { id: '7', name: 'Lait Bio', price: 2.29, category: 'Produits Laitiers', image: '🥛' },
  { id: '8', name: 'Fromage', price: 3.99, category: 'Produits Laitiers', image: '🧀' },
  { id: '9', name: 'Yaourt Nature', price: 1.99, category: 'Produits Laitiers', image: '🥛' },
  { id: '10', name: 'Beurre', price: 2.49, category: 'Produits Laitiers', image: '🧈' },
  { id: '11', name: 'Crème Fraîche', price: 1.99, category: 'Produits Laitiers', image: '🥛' },
  { id: '12', name: 'Œufs Bio', price: 3.49, category: 'Produits Laitiers', image: '🥚' },

  // Boulangerie
  { id: '13', name: 'Baguette', price: 0.99, category: 'Boulangerie', image: '🥖' },
  { id: '14', name: 'Croissant', price: 1.29, category: 'Boulangerie', image: '🥐' },
  { id: '15', name: 'Pain Complet', price: 2.49, category: 'Boulangerie', image: '🍞' },
  { id: '16', name: 'Pain aux Raisins', price: 1.49, category: 'Boulangerie', image: '🥨' },
  { id: '17', name: 'Brioche', price: 2.99, category: 'Boulangerie', image: '🍞' },
  { id: '18', name: 'Pain au Chocolat', price: 1.29, category: 'Boulangerie', image: '🥐' },
];

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Grouper les produits par catégorie
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

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
            <h1 className="text-2xl font-bold text-gray-800">Produits Frais</h1>
          </div>
          
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <span className="text-xl">🛒</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>

        {/* Products by Category */}
        {Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                >
                  <div className="text-4xl mb-2 text-center">{product.image}</div>
                  <h3 className="text-gray-800 font-medium text-center mb-1">
                    {product.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-center">
                    {product.price.toFixed(2)} €
                  </p>
                  <button className="mt-2 w-full bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                    Ajouter au panier
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* No Results Message */}
        {Object.keys(groupedProducts).length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Aucun produit trouvé pour "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default Products; 