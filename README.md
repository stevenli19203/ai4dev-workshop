# Good Price - Micro-frontends avec Nx

✨ Une application moderne de micro-frontends construite avec Nx et Module Federation ✨

## 🏗️ Structure du Projet

Le projet est composé de plusieurs applications indépendantes :

- **main** : L'application hôte qui orchestre les micro-frontends
- **ecommerce** : Service de e-commerce
- **receipe** : Service de recettes et astuces
- **blog** : Service de découverte et actualités

## 🚀 Démarrage

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## 🔧 Configuration

Le projet utilise Module Federation pour le partage de code entre les micro-frontends. Chaque application a sa propre configuration Webpack dans `webpack.config.js`.

### Ports par défaut

- main: 4200
- ecommerce: 4201
- receipe: 4202
- blog: 4203

## 🛠️ Technologies Utilisées

- React 19
- React Router 6
- Module Federation
- Tailwind CSS
- TypeScript

## 📦 Dépendances Partagées

Les dépendances suivantes sont partagées entre les micro-frontends :
- react
- react-dom
- react-router-dom

## 🧪 Tests

Pour exécuter les tests :

```bash
npx nx test
```

## 📚 Documentation

- [Documentation Nx](https://nx.dev)
- [Module Federation](https://webpack.js.org/concepts/module-federation/)
- [React](https://react.dev)
- [React Router](https://reactrouter.com)

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

