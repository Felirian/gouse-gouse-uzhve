# Stage 1: Install dependencies
FROM node:alpine AS deps
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Stage 2: Build the application
FROM node:alpine AS builder
WORKDIR /app

# Copy application source code
COPY . .

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Build the application
RUN npm run build

# Stage 3: Setup production environment
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy necessary files from builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3177

CMD ["npm", "start"]



