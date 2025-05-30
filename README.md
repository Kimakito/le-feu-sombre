# 🌐 Le Feu sombre

Ce projet est un site web simple utilisant [TailwindCSS](https://tailwindcss.com/) pour le style, et hébergé gratuitement avec [GitHub Pages](https://pages.github.com/).

---

## 🔧 Prérequis

Avant de commencer, installe ces outils :

- [Git](https://git-scm.com/downloads) — pour récupérer le projet
- [Node.js](https://nodejs.org/) (version LTS recommandée) — pour utiliser TailwindCSS
- Un éditeur de texte comme [VS Code](https://code.visualstudio.com/)

---

## 🧑‍💻 Étapes pour installer le projet

### 1. Cloner le dépôt

Ouvre ton terminal (ou Git Bash sur Windows) et tape :

```bash
git clone https://github.com/ton-utilisateur/nom-du-repo.git
cd nom-du-repo

Dans le dossier du projet, installe TailwindCSS et les outils associés :
npm install

Lance TailwindCSS pour générer les styles automatiquement :
npx tailwindcss -i ./styles/input.css -o ./styles/output.css --watch

Puis ouvre le fichier index.html dans ton navigateur pour voir le résultat./ Tu peux utiliser le "go live" de VsCode

nom-du-repo/
├── index.html
├── styles/
│   ├── input.css        # Contient les directives Tailwind
│   └── output.css       # Généré automatiquement
├── tailwind.config.js   # Configuration de Tailwind
├── package.json         # Liste des dépendances
└── README.md
