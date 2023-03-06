const path = require('path');
function decideEnv() {
  const { NODE_ENV } = process.env;
  // this function decides whether to load .env or .env.test.
  if (NODE_ENV != 'production') {
    // capture first command line argument passed to this script

    const args = process.argv.slice(2)[0];

    const envFile = args === 'test' ? '../.env.test' : '../.env';

    // put the next line to explain whats in args

    console.log(envFile);

    require('dotenv').config({
      path: path.join(__dirname, envFile),
    });
  }
}
module.exports = { decideEnv };
