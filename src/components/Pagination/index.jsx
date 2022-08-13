import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const Pagination = ({ countHotel }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = +searchParams.get('page') || 1;

    const handleChangePage = (page) => {
        searchParams.set('page', page);
        setSearchParams(searchParams);
    };

    let pages = [];

    for (let i = 1; i <= Math.ceil(countHotel / 3); i++) {
        pages.push(i);
    }
    return (
        <div className="Pagination">
            {pages.map((page) => {
                return (
                    <span
                        key={page}
                        className={
                            page === currentPage ? 'Page active' : 'Page'
                        }
                        onClick={() => handleChangePage(page)}
                    >
                        {page}
                    </span>
                );
            })}
        </div>
    );
};
