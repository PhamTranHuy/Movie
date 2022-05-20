import clsx from 'clsx';
import { useState, useLayoutEffect } from 'react';

interface props {
    title?: string
}
const FILTERS = ["On TV", "In Theaters"];

function MovieCategory({title}: props) {
    const [filter, setFilter] = useState<string>(FILTERS[0]);
    const [filterBgPosition, setFilterBgPosition] = useState<{}>();

    const getFilterPosition = () => {
        const wrapper = document.querySelector("#filter-wrapper");
        const filterActive = document.querySelector(".filter-gradient-text");
        if (!filterActive || !wrapper) return;
        const filterBounding = filterActive.getBoundingClientRect();
        const wrapperBounding = wrapper.getBoundingClientRect();
        return {
            left: filterBounding.left - wrapperBounding.left,
            width: filterBounding.width
        }
    }
    const handleFilterClick = (e: any) => {
        setFilter(e.target.innerText);
    }

    useLayoutEffect(() => {
        setFilterBgPosition(getFilterPosition());
    }, [filter])

    return (
        <div>
            <div className="flex font-semibold px-10">
                <div className="mr-5 text-2xl">{title}</div>
                <div id="filter-wrapper" className="relative flex border border-black rounded-3xl">
                    {FILTERS.map((name, index) => (
                        <div key={index} 
                            style={{transition: 'all 0.25s'}}
                            className={clsx(
                                filter === name ? 'filter-gradient-text' : '',
                                "flex-center px-5 rounded-3xl z-10 ml-[-1px] text-darkBlue")}
                            onClick={handleFilterClick}>{name}</div>
                    ))}
                    <div style={{
                            ...filterBgPosition,
                            transition: 'all 0.35s'
                        }} className="absolute inset-0 z-0 
                        bg-darkBlue rounded-3xl"></div>
                </div>
            </div>
            <div>body</div>
        </div>
    )
}

export default MovieCategory
