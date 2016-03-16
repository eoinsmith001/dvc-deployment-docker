FROM mhart/alpine-node:4.4
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]
