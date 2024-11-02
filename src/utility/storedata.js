const storeName = "read-list";
const getStoredData = () => {
  const storedReadList = localStorage.getItem(storeName);

  if (storedReadList) {
    const storedListStr = JSON.parse(storedReadList);
    return storedListStr;
  } else {
    return [];
  }
};

const addToReadList = (id) => {
  const bookList = getStoredData();
  if (bookList.includes(id)) {
    console.log("this book is already listed");
  } else {
    bookList.push(id);
    localStorage.setItem(storeName, JSON.stringify(bookList));
  }
};

export { addToReadList, getStoredData };
