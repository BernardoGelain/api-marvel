import ReactPaginate from "react-paginate";
import { PaginationContainer } from "./pagination-styles";

type Props = {
  pageCount: number;
  setCurrentPage: (page: number) => void;
};

export const Pagination = ({ pageCount = 0, setCurrentPage }: Props) => {
  const handlePageChange = (e: { selected: number }) => {
    setCurrentPage(e.selected);
  };

  return (
    <PaginationContainer>
      <ReactPaginate
        previousLabel=""
        nextLabel=""
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={Math.ceil(pageCount)}
        containerClassName="pagination"
        activeClassName="active"
        onPageChange={handlePageChange}
      />
    </PaginationContainer>
  );
};
