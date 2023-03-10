export const getContacts = hasError =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasError) return reject('Cannot fetch the list !');
      resolve({
        contacts: [
          { id: 0, name: 'Ted Bundy', phone: '555-123-4567' },
          { id: 1, name: 'Ed Gein', phone: '555-234-5678' },
          { id: 2, name: 'Richard Ramirez', phone: '555-345-6789' },
          { id: 3, name: 'John Wayne Gacy', phone: '555-456-7890' },
          { id: 4, name: 'David Berkowitz', phone: '555-567-8901' },
        ],
      });
    }, 1000);
  });

export const deleteTask = id =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject('no id!');
      } else {
        resolve(`${id} was deleted`);
      }
    }, 1000);
  });

export const addTask = text =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!text) {
        reject('There was no name');
      } else {
        resolve(`${text} was added`);
      }
    }, 1000);
  });
