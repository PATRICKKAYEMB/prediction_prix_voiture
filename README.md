# 🚗 Prediction Prix Voiture

Application web de prédiction de prix de véhicule, développée avec un frontend React et un backend Django. Le projet permet à un utilisateur de saisir les caractéristiques d'une voiture (marque, moteur, transmission, carburant, année, kilométrage, nombre de propriétaires, etc.) et de recevoir une estimation de prix basée sur un modèle de Machine Learning.

L'application aide à répondre à un besoin concret : estimer rapidement la valeur d'un véhicule avant achat ou vente, en s'appuyant sur des données structurées et des modèles prédictifs.

## ✨ Fonctionnalités principales

- Formulaire de saisie des caractéristiques du véhicule
- Prédiction automatique du prix via un modèle ML
- Liste des prédictions enregistrées
- Suppression d'une prédiction depuis l'interface
- API REST pour la gestion des prédictions
- Interface moderne et responsive

---

## 🛠 Stack technique & prérequis

### Stack technique

- Frontend : React 19, Vite, React Router, Tailwind CSS
- Backend : Python 3.11, Django 5.1.7, Django REST Framework
- Base de données : SQLite (développement local)
- Machine Learning : scikit-learn, joblib, RandomForestRegressor
- Outils : npm, pip, Git, VS Code

### Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé :

- Node.js 18+ et npm 9+
- Python 3.10+ (recommandé : 3.11)
- pip
- Un environnement virtuel Python
- Git

Vérification rapide :

```bash
node -v
npm -v
python --version
pip --version
```

---

## 🚀 Installation & configuration

### 1. Cloner le projet

```bash
git clone <url-du-repo>
cd prediction_prix_voiture
```

### 2. Créer et activer un environnement virtuel Python

```bash
python -m venv .venv
source .venv/bin/activate
```

Sous Windows PowerShell :

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

### 3. Installer les dépendances backend

```bash
pip install -r backend/requirements.txt
```

### 4. Configurer la base de données

Depuis le dossier backend du projet :

```bash
cd backend/prediction_project
python manage.py migrate
```

### 5. Installer les dépendances frontend

```bash
cd ../../app
npm install
```

### 6. Vérifier le modèle ML

Le projet charge un fichier de modèle depuis :

```text
backend/prediction_project/modele_ML/CarPrixRegression.pkl
```

Assurez-vous que ce fichier existe avant d'effectuer des prédictions. Aucune variable d'environnement n'est requise par défaut pour cette version locale.

---

## ⚙️ Utilisation & démarrage

### Lancer le backend Django

Depuis la racine du projet :

```bash
source .venv/bin/activate
cd backend/prediction_project
python manage.py runserver
```

Le backend est alors accessible à l'adresse :

```text
http://127.0.0.1:8000
```

API principale :

```text
GET    http://127.0.0.1:8000/api/prix/
POST   http://127.0.0.1:8000/api/prix/
DELETE http://127.0.0.1:8000/api/prix/<id>/
```

### Lancer le frontend React

Dans un autre terminal :

```bash
cd app
npm run dev
```

Le frontend est accessible par défaut à :

```text
http://localhost:5173
```

### Exemple d'utilisation

1. Ouvrir l'application dans le navigateur.
2. Cliquer sur le formulaire d'ajout d'une voiture.
3. Remplir les champs : marque, moteur, boîte de vitesse, carburant, année, portes, kilométrage, propriétaire.
4. Valider.
5. La prédiction est calculée et affichée dans la liste.

---

## 📁 Structure du projet

```text
prediction_prix_voiture/
├── README.md
├── app/
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── index.css
│       ├── assets/
│       ├── composants/
│       │   ├── Ajout.jsx
│       │   └── Navbar.jsx
│       ├── contex/
│       │   └── AppContex.jsx
│       └── pages/
│           ├── Ajouter.jsx
│           └── Home.jsx
├── backend/
│   ├── requirements.txt
│   └── prediction_project/
│       ├── db.sqlite3
│       ├── manage.py
│       ├── modele_ML/
│       │   ├── CarPrixRegression.pkl
│       │   ├── carsPrixRegression.pkl
│       │   └── house.pkl
│       ├── car/
│       │   ├── __init__.py
│       │   ├── admin.py
│       │   ├── apprendre.py
│       │   ├── apps.py
│       │   ├── models.py
│       │   ├── serializer.py
│       │   ├── tests.py
│       │   ├── urls.py
│       │   ├── views.py
│       │   └── migrations/
│       └── prediction_project/
│           ├── __init__.py
│           ├── asgi.py
│           ├── settings.py
│           ├── urls.py
│           └── wsgi.py
└── .venv/   # environnement virtuel local (non versionné)
```

### Rôle des dossiers principaux

- `app/` : interface utilisateur React et logique côté client
- `src/pages/` : pages de navigation de l'application
- `src/contex/` : contexte global des données de prédiction
- `backend/` : backend Django et API REST
- `car/` : application Django de gestion des prédictions et du modèle
- `modele_ML/` : fichiers du modèle entraîné pour la prédiction

---

## 🧪 Tests & qualité du code

### Lint frontend

```bash
cd app
npm run lint
```

### Tests backend

Le projet ne contient pas encore de suite de tests automatisés complète, mais la commande standard Django peut être utilisée dès qu'un jeu de tests est ajouté :

```bash
cd backend/prediction_project
python manage.py test
```

### Bonnes pratiques

- Garder les dépendances à jour
- Vérifier les modèles de données avant les déploiements
- Tester les cas de validation côté backend
- Contrôler la qualité du code avec ESLint

---





## ✅ Résumé

Ce projet combine :

- un frontend React moderne,
- un backend Django robuste,
- une API REST simple,
- et un modèle de prédiction de prix automobile.

Il constitue une base solide pour une application de valorisation de véhicules, avec potentiel d'évolution vers des fonctionnalités avancées comme :

- historiques de prédictions,
- export CSV,
- authentification utilisateur,
- modèle amélioré avec plus de données,
- interface d'administration.

---

Projet développé dans le cadre d'une application de démonstration ML + web full-stack.
