// Import dependencies from idb //
import { openDB } from 'idb';

const initdb = async () =>
  // We are creating a new database named 'jate' which will be using version 1 of the database.
  openDB('jate', 1, {
    // Add our database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create a new object store for the data and give it an key name of 'id' which needs to increment automatically.
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// PUT method to add content in database //
export const putDb = async (content) => {
  console.log('Text has been updated in the database');
  // Create a connection to the database database and version we want to use.
  const contactDb = await openDB('jate', 1);
  // Create a new transaction and specify the database and data privileges, which is readwrite //
  const tx = contactDb.transaction('jate', 'readwrite');
  // Open up the desired object store.
  const store = tx.objectStore('jate');
  // Use the .put() method to add content to database.
  const request = store.put({id: 1, value: content});
  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
};

// GET method for all the content in database //
// Similar function to PUT above with a few changes //
export const getDb = async () => {
  console.log('Text has been retrieved from the database');
  const contactDb = await openDB('jate', 1);
  // Data privileges is read only //
  const tx = contactDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result.value);
  return result.value;
}

// Start the database.
initdb();
