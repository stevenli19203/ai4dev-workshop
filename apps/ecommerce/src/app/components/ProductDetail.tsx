import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  features?: string[];
  specifications?: Record<string, string>;
  stock: number;
}

// Simuler un appel API pour récupérer les détails du produit
const fetchProductDetails = async (productId: string): Promise<Product> => {
  // À remplacer par votre vraie API
  return {
    id: productId,
    name: 'Sample Product',
    description: 'Detailed description of the product with all its features and benefits.',
    price: 99.99,
    category: 'Electronics',
    image: '/assets/products/sample.jpg',
    rating: 4.5,
    reviews: 123,
    features: [
      'High quality materials',
      'Durable construction',
      'Easy to use',
      '1 year warranty'
    ],
    specifications: {
      'Brand': 'Sample Brand',
      'Model': 'SB-2024',
      'Weight': '1.5 kg',
      'Dimensions': '30 x 20 x 10 cm'
    },
    stock: 15
  };
};

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (productId) {
      fetchProductDetails(productId).then(setProduct);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image du produit */}
        <div className="aspect-w-1 aspect-h-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Détails du produit */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          
          {/* Prix et notation */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {'★'.repeat(Math.floor(product.rating))}
              </div>
              <span className="ml-2 text-gray-600">
                ({product.reviews} avis)
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Caractéristiques principales */}
          {product.features && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Caractéristiques</h2>
              <ul className="list-disc list-inside space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Spécifications */}
          {product.specifications && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Spécifications</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <span className="font-medium text-gray-700">{key}: </span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sélection de quantité et ajout au panier */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="text-gray-700">Quantité:</label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border rounded-md px-2 py-1"
              >
                {[...Array(Math.min(10, product.stock))].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <span className="text-gray-600">
                {product.stock} en stock
              </span>
            </div>

            <button
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => {
                // Implémenter la logique d'ajout au panier ici
                alert('Produit ajouté au panier !');
              }}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 