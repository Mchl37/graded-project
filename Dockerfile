# Utiliser l'image de base node
FROM node:20.11

# Installer pnpm globalement
RUN npm install -g pnpm

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et pnpm-lock.yaml
COPY cra/package*.json ./

# Installer les dépendances avec pnpm
RUN pnpm install

# Copier tous les fichiers du projet dans le conteneur
COPY cra .

# Exposer le port utilisé par l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["pnpm", "start"]
