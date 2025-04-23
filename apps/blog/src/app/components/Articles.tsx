import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Les tendances du développement web en 2024',
    excerpt: 'Découvrez les dernières technologies et frameworks qui façonnent le web moderne...',
    author: 'Marie Dubois',
    date: '2024-03-15',
    category: 'Technologie',
    imageUrl: 'https://picsum.photos/seed/article1/400/300',
  },
  {
    id: '2',
    title: 'Comment optimiser ses micro-frontends',
    excerpt: 'Guide pratique pour améliorer les performances de vos applications distribuées...',
    author: 'Jean Martin',
    date: '2024-03-14',
    category: 'Architecture',
    imageUrl: 'https://picsum.photos/seed/article2/400/300',
  },
  {
    id: '3',
    title: 'L\'impact de l\'IA sur le développement',
    excerpt: 'L\'intelligence artificielle révolutionne la façon dont nous créons des applications...',
    author: 'Sophie Bernard',
    date: '2024-03-13',
    category: 'Intelligence Artificielle',
    imageUrl: 'https://picsum.photos/seed/article3/400/300',
  },
];

const Articles: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredArticles = MOCK_ARTICLES.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(MOCK_ARTICLES.map(article => article.category)));

  const handleArticleClick = (articleId: string) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* En-tête et filtres */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Articles</h1>
        
        <div className="flex flex-col md:flex-row gap-4">
          {/* Barre de recherche */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Filtre par catégorie */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Toutes les catégories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grille d'articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            onClick={() => handleArticleClick(article.id)}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm font-medium text-blue-600">{article.category}</span>
              <h2 className="text-xl font-semibold text-gray-800 mt-2 mb-3">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{article.author}</span>
                <time>{new Date(article.date).toLocaleDateString('fr-FR')}</time>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Message si aucun résultat */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Aucun article ne correspond à votre recherche.
        </div>
      )}
    </div>
  );
};

export default Articles; 