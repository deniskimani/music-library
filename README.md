# ENV AND TEST ENV

make two file `.env` and `.env.test`
add this to your `.env`
PGUSER=postgres
PGHOST=localhost
PGPASSWORD=password
PGDATABASE=music_library_dev
PGPORT=5432
PORT=3000

copy the same to your '.env.test' but change database to PGDATABASE=music_library_test
