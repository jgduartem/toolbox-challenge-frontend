FROM node:16-alpine

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npm -g i serve

CMD ["serve", "-p", "80", "-s", "build"]
