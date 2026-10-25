# Development image for the NULIX landing page (Next.js, hot reload)
FROM node:22-bookworm-slim

ENV NODE_ENV=development \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0

# Create the app dir and the .next dir owned by the unprivileged "node" user.
# Docker copies this ownership into the anonymous /app/.next volume from
# docker-compose.yml; without it the volume is root-owned and Next.js
# fails with EACCES: permission denied, mkdir '/app/.next/dev'.
RUN mkdir -p /app/.next /app/node_modules && chown -R node:node /app
WORKDIR /app
USER node

# Install dependencies first so Docker caches this layer
COPY --chown=node:node package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Source is bind-mounted by docker-compose for live reload;
# copying it here keeps `docker run` working without compose.
COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0", "-p", "3000"]
