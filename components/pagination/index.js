const Pagination = ({ firmsPerpage, totalFirms, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFirms / firmsPerpage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div data-test="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <p onClick={() => paginate(number)}>{number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
