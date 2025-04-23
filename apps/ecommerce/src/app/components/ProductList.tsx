import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Cette fonction simule un appel API
const fetchProducts = async (categoryId: string) => {
  // Ici, vous devrez implémenter votre propre logique pour récupérer les produits
  return [
    {
      id: '1',
      name: 'Sample Product',
      description: 'This is a sample product description',
      price: 99.99,
      category: categoryId,
      image: '/assets/products/sample.jpg',
      rating: 4.5,
      reviews: 123
    },
    // Ajoutez plus de produits
  ];
};

const ProductList = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState<{ id: string; name: string; description: string; price: number; category: string; image: string; rating: number; reviews: number; }[]>([]);

  useEffect(() => {
    if (categoryId) {
      fetchProducts(categoryId).then((data) => setProducts(data));
    }
  }, [categoryId]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: { id: string; name: string; description: string; price: number; category: string; image: string; rating: number; reviews: number; }) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400">{'★'.repeat(Math.floor(product.rating))}</span>
                <span className="text-gray-400 text-sm ml-2">({product.reviews} reviews)</span>
              </div>
              <p className="text-xl font-bold text-gray-900">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 