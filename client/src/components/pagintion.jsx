import React from "react";

//import "./pagination.css";

const Pagination = ({
    totalPosts,
    firstindex,
    lastindex,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    const pageNumbers = [...Array(pages + 1).keys()].slice(1);

    return (
        <div className='pagination'>
            {/* {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}>
                       
                        {page}
                    </button>
                );
            })} */}

<nav>
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a className="page-link" 
                        onClick={prevPage} 
                        href='#'>
                        
                        Previous  
                       
                    
                    </a>
                </li>
                {pages.map((pgNumber,i) => (
                    <li key={pgNumber} 
                        className= {`page-link ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                            href='#'>
                            
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" 
                        onClick={nextPage}
                        href='#'>
                        
                        Next
                    </a>
                </li>
            </ul>
        </nav>

        </div>

    );

    function prevPage()
    {
        if (currentPage!== firstindex)
        {
            setCurrentPage(currentPage-1)
        }
    }

    function nextPage()
    {
        if (currentPage!== lastindex)
        {
            setCurrentPage(currentPage+1)
        }
    }



};

export default Pagination;

 // className={page == currentPage ? "active" : ""}  db.books.aggregate([ { $addFields: { nameWords: { $split: ["$name", " "] } } }, { $addFields: { wordCount: { $size: "$nameWords" } } }, { $sort: { wordCount: -1 }  }] )