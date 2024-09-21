import React from "react";

const Pagination = ({ totalPages, currentPage, handlePageChange, handlePrevPage, handleNextPage }) => {
  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 border ${i === currentPage ? "bg-black text-white" : "bg-white text-black"}`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="px-3 py-1 border bg-white text-black"
      >
        &lt; Prev
      </button>
      {renderPages()}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border bg-white text-black"
      >
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;
