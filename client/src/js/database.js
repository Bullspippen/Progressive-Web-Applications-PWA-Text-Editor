import { openDB } from 'idb';
//test

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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db = await initdb();
  // db.transaction('jate' means that we want to access the jate object store
  // 'readwrite' means that we want to be able to write to the object store
  const tx = db.transaction('jate', 'readwrite');
  // tx.store.add(content) means that we want to add the content to the object store
  await tx.store.add({ content });
  await tx.complete;
  console.log('putDb success');
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await initdb();
  // db.transaction('jate' means that we want to access the jate object store
  // 'readonly' means that we want to be able to read from the object store
  const tx = db.transaction('jate', 'readonly');
  // tx.store.getAll() means that we want to get all the content from the object store
  const content = await tx.store.getAll();
  await tx.complete;
  console.log('getDb success');
  return content;
};

initdb();
