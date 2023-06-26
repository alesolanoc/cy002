#docker build -t build cypress001:1 .
#docker run cypress001:1
FROM cypress/browsers:node14.17.0-chrome91-ff89
COPY cypress home/cypress/
COPY package.json home/package.json
COPY cypress.config.js home
WORKDIR home
ENTRYPOINT npx cypress run