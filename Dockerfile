# base image
FROM node:16-alpine


# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY package.json ./
COPY yarn.lock ./

RUN apk add --update --no-cache python3 build-base gcc && ln -sf /usr/bin/python3 /usr/bin/python

RUN yarn install

# copy source files
COPY . .

# start app
RUN npm run build
EXPOSE 3001
CMD npm run start