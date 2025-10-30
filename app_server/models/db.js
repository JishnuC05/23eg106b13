const mongoose = require('mongoose');
let dbURI;
if (process.env.MONGODB_URI) {
  dbURI = process.env.MONGODB_URI;
} else {
  // For development only: use local database
  if (process.env.NODE_ENV !== 'production') {
    dbURI = 'mongodb://localhost/Loc8r';
  } else {
    // In production without MONGODB_URI, don't connect to avoid errors
    console.log('No MONGODB_URI environment variable found in production. Skipping database connection.');
    return; // Exit early, don't connect
  }
}
mongoose.connect(dbURI).catch(err => {
  console.log('Database connection failed, but continuing with application...');
  console.log('Error:', err.message);
});

mongoose.connection.on('connected', () => {
 console.log(`Mongoose connected to ${dbURI}`);
});
 mongoose.connection.on('error', err => {
  console.log(`Mongoose connection error: ${err}`);
 });
 mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
 });
 const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
 };
 // For nodemon restarts
 process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
   });
 // For app termination
 process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
 });
 // For Heroku app termination
 process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
 });
