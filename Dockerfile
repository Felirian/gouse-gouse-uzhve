# Stage 1: Install dependencies
FROM node:alpine AS deps
WORKDIR /app

# Установим необходимые пакеты для сборки
RUN apk add --no-cache libc6-compat

# Скопируем package.json и package-lock.json для установки зависимостей
COPY package.json package-lock.json ./

# Установим зависимости
RUN npm install

# Stage 2: Build the application
FROM node:alpine AS builder
WORKDIR /app

# Скопируем исходный код
COPY . .

# Скопируем node_modules из deps stage
COPY --from=deps /app/node_modules ./node_modules

# Выполним команду сборки
RUN npm run build

# Stage 3: Setup production environment
FROM node:alpine AS runner
WORKDIR /app

# Установим переменную окружения для production
ENV NODE_ENV production

# Добавим группу и пользователя
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Скопируем необходимые файлы из builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Установим пользователя nextjs
USER nextjs

# Откроем порт 3177
EXPOSE 3177

# Команда для запуска приложения
CMD ["npm", "start"]




