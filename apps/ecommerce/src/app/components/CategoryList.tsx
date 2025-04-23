import { Link } from 'react-router-dom';

interface CategoryProps {
  categories: {
    id: string;
    name: string;
    image: string;
    description: string;
  }[];
}

const CategoryList = ({ categories }: CategoryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          to={`/category/${category.id}`}
          key={category.id}
          className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={category.image}
              alt={category.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            <p className="text-gray-600">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList; 