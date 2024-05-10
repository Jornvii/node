const sql = require('mssql');

const config = {
  user: 'your_username',
  password: 'your_password',
  server: 'your_server',
  database: 'InventoryManagement',
};

const db = new sql.ConnectionPool(config);

db.connect((err) => {
  if (err) console.error(err);
  console.log('Connected to database');
});

module.exports = db;