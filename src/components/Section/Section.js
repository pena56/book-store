import React from "react";
import "./Section.css";
import bs1 from "../../imgs/books/bs1.jpg";
import bs2 from "../../imgs/books/bs2.jpg";
import bs3 from "../../imgs/books/bs3.jpg";
import bs4 from "../../imgs/books/bs4.jpg";
import bs5 from "../../imgs/books/bs5.jpg";
import bs6 from "../../imgs/books/bs6.jpg";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";

function Section() {
  // const books = useSelector((state) => state.book.Books);
  return (
    <>
      <div className="section">
        <div className="section__header">
          <p className="section__header-title">BestSellers</p>
          <p className="section__header-button">
            <Link>See More</Link>
          </p>
        </div>
        <div className="section__items">
          <div className="section__item">
            <img src={bs1} alt="bs1" className="section__item-image" />
            <p className="section__item-title">No Place like here</p>
            <p className="section__item-author">Christina June</p>
            <p className="section__item-price">$12.56</p>
          </div>
          <div className="section__item">
            <img src={bs2} alt="bs2" className="section__item-image" />
            <p className="section__item-title">The Impossible World</p>
            <p className="section__item-author">Liese O'Halloran Schwarz</p>
            <p className="section__item-price">$16.56</p>
          </div>
          <div className="section__item">
            <img src={bs3} alt="bs3" className="section__item-image" />
            <p className="section__item-title">The Great Gatsby</p>
            <p className="section__item-author">F Scott Fitzgerald</p>
            <p className="section__item-price">$10.56</p>
          </div>
          <div className="section__item">
            <img src={bs4} alt="bs4" className="section__item-image" />
            <p className="section__item-title">The King of Drugs</p>
            <p className="section__item-author">Nora Barrett</p>
            <p className="section__item-price">$5.99</p>
          </div>
          <div className="section__item">
            <img src={bs5} alt="bs5" className="section__item-image" />
            <p className="section__item-title">Sugar Run</p>
            <p className="section__item-author">Mesha Maren</p>
            <p className="section__item-price">$11.56</p>
          </div>
          <div className="section__item">
            <img src={bs6} alt="bs6" className="section__item-image" />
            <p className="section__item-title">The Girl in Red</p>
            <p className="section__item-author">Christina Henry</p>
            <p className="section__item-price">$22.56</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section__header">
          <p className="section__header-title">Best of the Month</p>
          <p className="section__header-button">
            <Link>See More</Link>
          </p>
        </div>
        <div className="section__items">
          <div className="section__item">
            <img src={bs3} alt="bs3" className="section__item-image" />
            <p className="section__item-title">The Great Gatsby</p>
            <p className="section__item-author">F Scott Fitzgerald</p>
            <p className="section__item-price">$10.56</p>
          </div>
          <div className="section__item">
            <img src={bs4} alt="bs4" className="section__item-image" />
            <p className="section__item-title">The King of Drugs</p>
            <p className="section__item-author">Nora Barrett</p>
            <p className="section__item-price">$5.99</p>
          </div>
          <div className="section__item">
            <img src={bs5} alt="bs5" className="section__item-image" />
            <p className="section__item-title">Sugar Run</p>
            <p className="section__item-author">Mesha Maren</p>
            <p className="section__item-price">$11.56</p>
          </div>
          <div className="section__item">
            <img src={bs6} alt="bs6" className="section__item-image" />
            <p className="section__item-title">The Girl in Red</p>
            <p className="section__item-author">Christina Henry</p>
            <p className="section__item-price">$22.56</p>
          </div>
          <div className="section__item">
            <img src={bs1} alt="bs1" className="section__item-image" />
            <p className="section__item-title">No Place like here</p>
            <p className="section__item-author">Christina June</p>
            <p className="section__item-price">$12.56</p>
          </div>
          <div className="section__item">
            <img src={bs2} alt="bs2" className="section__item-image" />
            <p className="section__item-title">The Impossible World</p>
            <p className="section__item-author">Liese O'Halloran Schwarz</p>
            <p className="section__item-price">$16.56</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
