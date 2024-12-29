#base image
FROM node:22-alpine

# set working directory
WORKDIR /app


# copy files to the container
COPY . .

#install dependencies
RUN yarn install

# set container port envorinment variable
#ENV PORT=4001
#ENV PORT_SERVICE_2=4002


# start the app
CMD ["sh","-c", "yarn start:both"]