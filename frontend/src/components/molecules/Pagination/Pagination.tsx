import "./Pagination.css";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <nav className={`pagination ${className}`.trim()} aria-label="Pagination">
      <button
        type="button"
        className="pagination__btn pagination__btn--prev"
        disabled={currentPage === 1}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        aria-label="Previous page"
      >
        ←
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <button
          key={`pagination-page-${pageNum}`}
          type="button"
          className={`pagination__btn ${
            currentPage === pageNum ? "pagination__btn--active" : ""
          }`}
          onClick={() => onPageChange(pageNum)}
          aria-current={currentPage === pageNum ? "page" : undefined}
        >
          {pageNum}
        </button>
      ))}

      <button
        type="button"
        className="pagination__btn pagination__btn--next"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        aria-label="Next page"
      >
        →
      </button>
    </nav>
  );
};

export default Pagination;
