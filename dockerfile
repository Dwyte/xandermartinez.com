# Stage 1: Build
FROM node:22-bullseye-slim AS builder

WORKDIR /app

# Copy package.json and lockfile
COPY package*.json ./

# Install dependencies including devDependencies for build
RUN npm ci --frozen-lockfile

# Copy app source
COPY . .

# Build the Next.js app
RUN npm run build

# Remove devDependencies to shrink size
RUN npm prune --production

# Stage 2: Runtime
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy only production files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Expose port
EXPOSE 3000

# Start Next.js in production
CMD ["npm", "start"]
