# Используем node:18 для сборки
FROM node:18 AS build

WORKDIR /app

# Копируем package.json и устанавливаем зависимости отдельно
COPY package*.json ./
RUN npm install

# Копируем остальной код
COPY . .

# Сборка проекта
RUN npm run build
