import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">ECommerce</Link>
          <div className="flex-1 mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg text-gray-900"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-6">
            <Link to="/cart" className="hover:text-gray-300">Cart</Link>
            <Link to="/account" className="hover:text-gray-300">Account</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 