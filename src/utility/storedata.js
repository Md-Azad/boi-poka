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
let wish = "wish-list";
const getStoredWishList = () => {
  const storedReadList = localStorage.getItem(wish);

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
const addToWishList = (id) => {
  const bookList = getStoredWishList();
  if (bookList.includes(id)) {
    console.log("this book is already listed in wish list");
  } else {
    bookList.push(id);
    localStorage.setItem(wish, JSON.stringify(bookList));
  }
};

export { addToReadList, getStoredData, getStoredWishList, addToWishList };
