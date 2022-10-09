const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "kenneth2907",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;
/*connection to postgres database */