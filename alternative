const fs = require('fs');
const { Newman } = require('newman');

// List of policy numbers
const policyNumbers = [
  '567888',
  '123456',
  '789012',
  '345678',
  '901234',
  '567890',
  '112233',
  '445566',
  '778899',
  '990011'
];

policyNumbers.forEach((policyNumber, index) => {
  Newman.run({
    collection: require('./your-collection.json'), // Path to your Postman collection
    environment: require('./your-environment.json'), // Path to your Postman environment
    iterationData: [{ policyNumber }], // Pass the current policy number as iteration data
    reporters: 'cli',
    onComplete: (err, summary) => {
      if (err) {
        console.error(`Error for policy number ${policyNumber}:`, err);
        return;
      }
      console.log(`Completed request for policy number: ${policyNumber}`);
    }
  });
});
