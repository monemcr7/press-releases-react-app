import React, {useState} from 'react';


const Pagination = ({ newsPerPage, totalCards, paginate , currentPage}) => {
    const [CurrentPage, setCurrentPage] = useState(currentPage)
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / newsPerPage); i++) {
    pageNumbers.push(i);
    // console.log("num" + i)
  }
//   console.log("page"+ pageNumbers)

  return (
    <nav aria-label="...">
        <ul className="pagination">
        <li className='page-item'>
        {pageNumbers.includes(CurrentPage - 1) && <a className='page-link' onClick={() => {
                    setCurrentPage(CurrentPage - 1);
                    paginate(CurrentPage - 1);
                }}>
                    <i className="fas fa-angle-left"></i>
            </a>}
        </li>
        {pageNumbers.map(number => {
            let activeClass = currentPage === number ? 'active' : '';
            return(
                <li key={number} className='page-item'>
                    <a onClick={() => paginate(number)} className={`page-link ${activeClass}`}>
                    {number}
                    </a>
                </li>
            )
            })}
            <li className='page-item'>
                {pageNumbers.includes(CurrentPage + 1) && <a className='page-link' onClick={() => {
                    setCurrentPage(CurrentPage + 1);
                    paginate(CurrentPage + 1);
                }}>
                    <i className="fas fa-angle-right"></i>
                </a>}
            </li>
        </ul>
    </nav>
  );
};

export default Pagination;