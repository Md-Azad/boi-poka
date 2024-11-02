import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredData } from "../../utility/storedata";
import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

const ListedBooks = () => {
  const [bookList, setBooks] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const readBooks = getStoredData();
    const books = allBooks.filter((book) => readBooks.includes(book.bookId));
    setBooks(books);
  }, []);

  return (
    <div>
      <h1>Listed books will be here.</h1>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          {bookList &&
            bookList.map((book, index) => (
              <BookCard key={index} book={book}></BookCard>
            ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
