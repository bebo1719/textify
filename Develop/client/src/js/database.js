import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method to accept content and add it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  
  // Open the database
  const db = await openDB('jate', 1);
  
  // Create a new transaction, specify the store, and set it to readwrite mode
  const tx = db.transaction('jate', 'readwrite');
  
  // Access the object store
  const store = tx.objectStore('jate');
  
  // Add content to the store
  const request = store.put({ content });
  
  // Confirm the request was successful
  const result = await request;
  console.log('Data saved to the database', result);
};

// Method to get all content from the database
export const getDb = async () => {
  console.log('GET all from the database');
  
  // Open the database
  const db = await openDB('jate', 1);
  
  // Create a new transaction, specify the store, and set it to readonly mode
  const tx = db.transaction('jate', 'readonly');
  
  // Access the object store
  const store = tx.objectStore('jate');
  
  // Get all content from the store
  const request = store.getAll();
  
  // Confirm the request was successful
  const result = await request;
  console.log('Data retrieved from the database', result);
  return result;
};

initdb();

