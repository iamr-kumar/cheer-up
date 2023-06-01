# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

# copy source files
COPY . .

# start app
RUN npm run build
EXPOSE 3001
CMD npm run start