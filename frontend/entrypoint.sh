#!/bin/sh
set -e

# Provide defaults if not set
: "${BACKEND_HOST:=backend}"
: "${BACKEND_PORT:=3000}"

# Replace template variables and write real nginx config
envsubst '${BACKEND_HOST} ${BACKEND_PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Start nginx in foreground
nginx -g 'daemon off;'
