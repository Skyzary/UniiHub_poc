# Multi-stage build: build TypeScript then create small runtime image

FROM node:20-alpine AS builder
WORKDIR /app

# Copy manifests and install all deps for build
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source and build
COPY . .
RUN npm run build

# Runtime image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy production deps only
COPY package*.json ./
RUN npm install --production --legacy-peer-deps

# Copy compiled output
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/index.js"]
