import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const Sort = ({ hotels, countHotel }) => {
    const [searchParams, setsearchParams] = useSearchParams();

    const selectedOption = searchParams.get('sortBy') ?? 'recommended';

    const handleChange = (e) => {
        searchParams.set('sortBy', e.target.value);
        searchParams.set('page', 1);
        setsearchParams(searchParams);
    };

    return (
        <div className="SortPart">
            <div className="Quantity">{countHotel} Properties Found</div>
            <div className="Sort">
                <select
                    name="sort"
                    id="sort"
                    onChange={handleChange}
                    defaultValue={selectedOption}
                >
                    <option value="recommended">Sort By Recommended</option>
                    <option value="price">Sort By Price</option>
                    <option value="name">Sort By Name</option>
                    <option value="class">Sort By Class</option>
                </select>
            </div>
        </div>
    );
};
