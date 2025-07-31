// server/test-db.js
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

/**
 * Connect to in-memory MongoDB before tests run
 */
const connectTestDB = async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
};

/**
 * Disconnect and cleanup database after tests
 */
const disconnectTestDB = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
};

module.exports = {
  connectTestDB,
  disconnectTestDB,
};
