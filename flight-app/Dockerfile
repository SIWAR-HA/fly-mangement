
FROM node:20 AS build

WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


RUN npm run build --prod


FROM nginx:alpine


COPY --from=build /app/dist/flight-app /usr/share/nginx/html


EXPOSE 82


CMD ["nginx", "-g", "daemon off;"]
