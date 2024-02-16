FROM node:20 as base

RUN npm install -g pnpm

WORKDIR /app
RUN npm i -g pnpm
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install
COPY . .

FROM base as build
RUN bun run build

FROM oven/bun as prod
ENV BUN_ENV=production
COPY --from=build /app/dist /app/dist
CMD ["bun", "./dist/index.js"]

FROM oven/bun as dev
ENV BUN_ENV=development
WORKDIR /app
COPY --from=base /app /
CMD ["bun", "run", "dev"]
