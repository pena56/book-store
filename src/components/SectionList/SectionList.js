import React, { useState, useEffect } from "react";
import "./SectionList.css";
import banner from "../../imgs/book.jpg";
import SearchIcon from "@material-ui/icons/Search";
import ListIcon from "@material-ui/icons/List";
import Category from "../Category/Category";
import Book from "../Book/Book";
import SkeletonItem from "../Skeletons/SkeletonItem";

function SectionList() {
  const [books, setBooks] = useState(null);
  const [topic, setTopic] = useState("fiction");

  useEffect(() => {
    const fetchBooks = async function () {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${topic}`
      );
      const result = await response.json();
      console.log(result.items);
      setBooks(result.items);
    };

    fetchBooks();
  }, [topic]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="sectionlist">
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundSize: "cover",
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="sectionList__header">
        <div className="sectionList__categories">
          <div className="sectionList__search">
            <input
              className="sectionList__search-input"
              type="text"
              placeholder="Search Books..."
            />
            <SearchIcon style={{ color: "#757575" }} />
          </div>
          <div className="section__categories">
            <Category name="Fiction" number="7363" />
            <Category
              onClick={() => setTopic("art")}
              name="Art and Music"
              number="6463"
            />
            <Category name="Biographies" number="363" />
            <Category name="Tech" number="973" />
            <Category name="Comic" number="73525" />
            <Category name="Kids" number="9663" />
            <Category name="Horror" number="63" />
            <Category name="History" number="3639" />
            <Category name="Fitness" number="63" />
          </div>
        </div>
        <div className="sectionList__books">
          <div className="sectionList__menu">
            <p className="sectionList__menu-title">
              Sort By <span>Newest Items</span>
            </p>
            <ListIcon style={{ marginLeft: "auto", color: "#ee434c" }} />
          </div>
          {books &&
            books.map((book) => (
              <Book
                id={book.id}
                key={book.id}
                cover={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors[0]}
                price={book.volumeInfo.pageCount / 100}
                ratings={book.volumeInfo.averageRating}
                desc={
                  book.volumeInfo.subtitle ||
                  truncate(book.volumeInfo.description, 250)
                }
              />
            ))}

          {!books &&
            [1, 2, 3, 4, 5].map((_, ind) => <SkeletonItem key={ind} />)}
        </div>
      </div>
    </div>
  );
}

export default SectionList;
