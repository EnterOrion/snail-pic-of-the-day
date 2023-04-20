import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import ReactPaginate from "react-paginate";
import Navigation from "../components/Nav";
import PicCard from "../components/PicCard";

function Items({ currentItems }) {
  return (
    <div className="pic-page-content">
      {currentItems.map((snailPic) => {
        return (
          <PicCard
            image={snailPic.photoUrl}
            date={format(new Date(snailPic.dateTaken), "LL/dd/yyyy")}
            category={snailPic.category}
            description={snailPic.description}
          />
        );
      })}
    </div>
  );
}

const DrawnCategory = ({ itemsPerPage }) => {
  const [snailPics, setSnailPics] = useState([]);
  useEffect(() => {
    fetch("https://snail-pic-api.onrender.com/api/snail-pics/2D")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSnailPics(data.snailPics);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = snailPics.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(snailPics.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % snailPics.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    window.scrollTo({ top: 0 });
  };
  return (
    <div className="pic-page">
      <Navigation />
      <h1>2D snails</h1>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default DrawnCategory;
