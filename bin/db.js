// db.js
const mysql = require('mysql2');

let connection = null; // This variable is 'closed over'

function createDbConnection() {
  if (!connection) {
    connection = mysql.createConnection({
      host:     'localhost',
      user:     'root',
      password: '12345',
      database: 'downtown_donuts',    // TODO: must match the DB name in your SQL setup script
    });

    connection.connect((err) => {
      if (err) {
        console.error('Could not connect to the database:', err);
      } else {
        console.log('Database connected!');
      }
    });
  }

  // Whether we just created it or it already existed, return it
  return connection;
}

// Middleware to attach the connection to the request object
function dbMiddleware(req, res, next) {
    req.db = createDbConnection();
    console.log(`DB middleware id: ${req.db.threadId}, called at: ${Date.now()}`);
    next();
}

// Function to close the connection (for graceful shutdown)
function closeDbConnection() {
  if (connection) {
    connection.end((err) => {
      if (err) {
        console.error('Error closing database:', err);
      } else {
        console.log('Database connection closed.');
        connection = null;
      }
    });
  }
}

module.exports = { dbMiddleware, closeDbConnection };