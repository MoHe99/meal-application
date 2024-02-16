FROM node:20 as base

WORKDIR /app
RUN npm i -g pnpm
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install
COPY . .

FROM base as build
RUN pnpm run build

FROM node:20 as prod
ENV NODE_ENV=production
COPY --from=build /app/dist /app/dist
CMD ["node", "./dist/app.js"]

FROM base as dev
ENV NODE_ENV=development
CMD ["pnpm", "run", "dev"]
