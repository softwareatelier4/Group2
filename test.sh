#!/bin/sh

npm install
npm run install-jenkins
npm run test-mocha
npm start &
npm run test-nightwatch
pkill "jobadvisor"
