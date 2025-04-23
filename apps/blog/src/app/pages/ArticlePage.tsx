import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  content?: string;
}

// Simulation d'une base de données d'articles
const MOCK_ARTICLES: Record<string, Article> = {
  '1': {
    id: '1',
    title: 'Les tendances du développement web en 2024',
    excerpt: 'Découvrez les dernières technologies et frameworks qui façonnent le web moderne...',
    author: 'Marie Dubois',
    date: '2024-03-15',
    category: 'Technologie',
    imageUrl: 'https://picsum.photos/seed/article1/800/400',
    content: `
      Les tendances du développement web évoluent rapidement en 2024. Voici les principales technologies à surveiller :

      1. Web Components et Micro-frontends
      Les composants web natifs gagnent en popularité, permettant une meilleure réutilisation du code à travers différents frameworks. Les micro-frontends continuent leur ascension, offrant plus de flexibilité dans le développement d'applications complexes.

      2. Edge Computing et SSR
      Le rendu côté serveur (SSR) à la périphérie (edge) devient de plus en plus courant, offrant des performances optimales aux utilisateurs du monde entier.

      3. Intelligence Artificielle dans le Développement
      Les outils de développement assistés par l'IA transforment la façon dont nous écrivons du code, avec des suggestions intelligentes et une automatisation accrue.

      4. WebAssembly et Performance
      WebAssembly continue de repousser les limites de ce qui est possible dans le navigateur, permettant des applications web plus rapides et plus puissantes.
    `
  },
  '2': {
    id: '2',
    title: 'Comment optimiser ses micro-frontends',
    excerpt: 'Guide pratique pour améliorer les performances de vos applications distribuées...',
    author: 'Jean Martin',
    date: '2024-03-14',
    category: 'Architecture',
    imageUrl: 'https://picsum.photos/seed/article2/800/400',
    content: `
      L'optimisation des micro-frontends est cruciale pour maintenir des performances optimales. Voici quelques conseils pratiques :

      1. Gestion des Dépendances
      - Utilisez un système de gestion des dépendances partagées
      - Évitez la duplication des bibliothèques communes
      - Mettez en place une stratégie de versioning cohérente

      2. Performance
      - Implémentez le lazy loading des modules
      - Optimisez la taille des bundles
      - Utilisez des stratégies de mise en cache efficaces

      3. Communication entre Micro-frontends
      - Définissez une stratégie de communication claire
      - Utilisez des événements personnalisés
      - Mettez en place un store global si nécessaire
    `
  },
  '3': {
    id: '3',
    title: 'L\'impact de l\'IA sur le développement',
    excerpt: 'L\'intelligence artificielle révolutionne la façon dont nous créons des applications...',
    author: 'Sophie Bernard',
    date: '2024-03-13',
    category: 'Intelligence Artificielle',
    imageUrl: 'https://picsum.photos/seed/article3/800/400',
    content: `
      L'intelligence artificielle transforme rapidement le monde du développement logiciel. Voici les principaux impacts :

      1. Assistance au Développement
      - Complétion de code intelligente
      - Détection précoce des bugs
      - Suggestions d'optimisation

      2. Tests et Qualité
      - Génération automatique de tests
      - Analyse prédictive des bugs
      - Optimisation du code en temps réel

      3. Productivité
      - Automatisation des tâches répétitives
      - Génération de documentation
      - Refactoring intelligent du code
    `
  }
};

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = id ? MOCK_ARTICLES[id] : null;

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article non trouvé</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-500 hover:text-blue-700"
          >
            Retourner à la liste des articles
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <button
        onClick={() => navigate('/')}
        className="mb-6 flex items-center text-blue-500 hover:text-blue-700"
      >
        <span className="mr-2">←</span>
        Retour aux articles
      </button>

      {/* En-tête de l'article */}
      <header className="mb-8">
        <span className="text-sm font-medium text-blue-600">{article.category}</span>
        <h1 className="text-4xl font-bold text-gray-800 mt-2 mb-4">{article.title}</h1>
        <div className="flex items-center text-gray-600">
          <span className="mr-4">{article.author}</span>
          <time>{new Date(article.date).toLocaleDateString('fr-FR')}</time>
        </div>
      </header>

      {/* Image principale */}
      <div className="mb-8">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Contenu de l'article */}
      <div className="prose prose-lg max-w-none">
        {article.content?.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {paragraph.trim()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage; 