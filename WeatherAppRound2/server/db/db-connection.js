// import pg from 'pg';
// const { Pool } = pg;
// const db = new Pool({
//   connectionString: 'postgres://localhost:5432/weatherapp'
// });

// export default db;

// server/db/db-connection.js;
import pgPromise from 'pg-promise';
// Create Database Connection
const pgp = pgPromise({});
const db = pgp('postgres://localhost:5432/weatherapp');
export default db;