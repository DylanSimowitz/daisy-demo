FROM node:18-alpine as deps
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY dist/apps/api/package.json ./
RUN npm install --only=production

FROM node:18-alpine as runner
LABEL maintainer="Dylan Simowitz <git@dylan.simowitz.com>"
RUN apk add --no-cache dumb-init
ENV NODE_ENV production
WORKDIR /usr/src/app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001
COPY --chown=nestjs:nodejs dist/apps/api .
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /usr/src/app/package.json ./package.json
USER nestjs
EXPOSE 3000
ENV PORT 3000
CMD ["dumb-init", "node", "main.js"]
