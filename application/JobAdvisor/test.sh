npm install -g cordova ionic
npm install

cd ../../site/
node seed.js
npm start &
npm run test-nightwatch
pkill "jobsecondgroup"

ionic serve
