# Build the Next.js standalone server bundle, then run it on node:alpine.
# Unlike the pure-static sites this one keeps a Node server: /api/contact
# (Turnstile verify + SES send) runs server-side. Runtime secrets come from
# the environment — nothing sensitive is baked into the image.
#
# Build from the repo root:
#   docker build -f docker/prod/Dockerfile --secret id=build_env,src=.env.dist .
#
# Build-time env: Next inlines the NEXT_PUBLIC_* values of `.env` (here just
# the public Turnstile *site* key) into the client bundle at build time. That
# file is .dockerignore'd and comes in as the BuildKit secret `build_env`,
# mounted as /app/.env for the build step only — never in the build context,
# an image layer or the build log. CI mounts the production value from the
# private deploy repo (vibast-deploy/vibast.ro/build.env); the command above
# uses the dev template for a local build. The runtime variables named in
# .env.dist (SES credentials, TURNSTILE_SECRET_KEY, …) are not read at build
# time — the container gets them from the server's env file.
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
# Next's output tracing copies .env into the standalone bundle — drop that copy
# so the env file never reaches the final stage.
RUN --mount=type=secret,id=build_env,target=/app/.env,required=true \
    npm run build && rm -f .next/standalone/.env

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production HOSTNAME=0.0.0.0 PORT=3000
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
USER node
EXPOSE 3000
CMD ["node", "server.js"]
