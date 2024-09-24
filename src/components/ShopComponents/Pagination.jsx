import React from "react";

const Pagination = ({ totalPages, currentPage, handlePageChange, handlePrevPage, handleNextPage }) => {
  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 border ${i === currentPage ? "text-white" : "bg-white text-black"}`}
          style={{ backgroundColor: '#0C0F18', border: '2px solid #0C0F18', color: '#B4B5B5' }}
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
