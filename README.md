### EXPRESS-MUSIC_LIBRARY SUMMARY

## Description

This is a express backend application that creates Artists and Albums , updates and deletes. It works intergrated with `docker` with `PostgresSQL` database server.

## Project Setup when recreating

Create repository on github music-library

Create a directory in your projects folder called music library

Initialize a git repo with `git init`

Connect your project to your github repo

Initialize a node project in your folder with `npm init -y`. This will create a default `package.json`

Create a `.gitignore` file. You can do this automatically with `npx gitignore` node. This will create a new file filled with common `.gitignore` entries.

Set up `eslint` in this project with `npx eslint --init`. The resulting eslintrc.json should look like this.

```json
{
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {}
}
```

Create a new file called prettierrc.json to have the following

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

Install express as a dependency

```js
npm i -S express
```

Make a folder in root called `src` and a file named `app.js` within it.

Put this in `app.js`.

```js
// './src/app.js'
const express = require('express');

const app = express();

app.use(express.json());

// Add a route to application as follows

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

module.exports = app;
```

Create a file in your root folder called `index.js`

Should look like this

```js
// index.js
const app = require('./src/app.js');

const APP_PORT = 4000;

app.listen(APP_PORT, () => {
  console.log(`App is listening on port ${APP_PORT}`);
});
```

This will be serving our express app on port `4000` when node index.js is run

## Setting up the Database

Install `dotenv` as a dev dependency. dotenv is a package which lets us load environment variables from a file

```js
npm i -D dotenv
```

# ENV AND TEST ENV

Make two files `.env` and `.env.test`
Add this to your `.env`

```js
PGUSER = postgres;
PGHOST = localhost;
PGPASSWORD = password;
PGDATABASE = music_library_dev;
PGPORT = 5432;
PORT = 3000;
```

Copy the same to your `.env.test` but change database to

```js
PGDATABASE = music_library_test;
```

Change `APP_PORT` in `index.js` to the following.

```js
 // index.js
 ...
 const APP_PORT = process.env.PORT || 4000;
 ...
```

Now running your application should open port `3000` confirming that your env is working

`Happy hacking....`

### DEPENDENCY INSTALLATION AFTER CLONE

Install dependencies

```js
npm install
```
