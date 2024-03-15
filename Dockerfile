FROM node:18-slim

RUN apt update && apt install -y bc rsync

USER node 

RUN mkdir /home/node/cache

WORKDIR /home/node/cache

# Cache estrategy
COPY --chown=node:node ./app/package*.json ./

RUN npm install
# RUN npm install --legacy-peer-deps

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY start.sh /

CMD [ "/start.sh" ]

# CMD tail -f /dev/null

# FROM node:21-alpine

# WORKDIR /usr/app

# COPY ./app . 

# RUN rm -rf node_modules
# RUN npm install 

# EXPOSE 3000

# # CMD [ "node", "app.js" ]
# CMD [ "npm", "start:dev" ]