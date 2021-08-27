FROM node:12-alpine as web
RUN mkdir /app
WORKDIR /app
COPY bzz-app001/package.json .
RUN npm install 
COPY bzz-app001 .
RUN npm run build

FROM node:12-alpine
ENV NODE_ENV=production
RUN mkdir /app
WORKDIR /app
COPY bzz-app001backend/package.json .
RUN npm install --production
COPY bzz-app001backend .
COPY --from=web /app/build /app/public/
CMD ["npm", "start"]