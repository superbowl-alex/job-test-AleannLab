import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      pageClassName={css.page_item}
      pageLinkClassName={css.page_link}
      previousClassName={css.page_item}
      previousLinkClassName={css.page_link}
      nextClassName={css.page_item}
      nextLinkClassName={css.page_link}
      breakClassName={css.page_item}
      breakLinkClassName={css.page_link}
      containerClassName={css.pagination}
      activeClassName={css.active}
    />
  );
};

export default Pagination;
