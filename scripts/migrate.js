const { migrate } = require('postgres-migrations');
// const path = require('path');
const { decideEnv } = require('./env-helper');

// This code is repeated a few times in our scripts. Can you factor it out into a shared helper function? **Done: the function decideEnv is it**

decideEnv();

const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env;

const config = {
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  port: parseInt(PGPORT),
  ensureDatabaseExists: true,
  defaultDatabase: PGDATABASE,
};

const migrateDB = async (config) => {
  console.log('Migrating Database...');

  const output = await migrate(config, './migrations');

  if (!output.length) {
    console.log('Database already up to date!');
  } else {
    console.log(output);
  }
};

try {
  migrateDB(config);
} catch (err) {
  console.log(err);
}
