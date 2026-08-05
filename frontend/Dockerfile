FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx template and entrypoint
COPY nginx.conf.template /etc/nginx/conf.d/default.conf.template
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Install envsubst (gettext) for runtime template substitution
RUN apk add --no-cache gettext

# Provide sane defaults; override via Docker env or Railway variables
ENV BACKEND_HOST=backend
ENV BACKEND_PORT=3000

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]