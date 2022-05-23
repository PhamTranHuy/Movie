import clsx from 'clsx';
import { useState, useEffect, ReactNode, useRef } from 'react';
import CustomScrollbar from '../CustomScrollbar/CustomScrollbar';

interface props {
    title?: string,
    children?: ReactNode,
    onFilterChange?: (filter: any) => void
}
export const FILTERS = ["On TV", "In Theaters"];

function MovieCategory({title, children, onFilterChange}: props) {
    const [filter, setFilter] = useState<string>(FILTERS[0]);
    const [filterBgPosition, setFilterBgPosition] = useState<{}>();
    const filterWrapper = useRef<any>();

    const getFilterPosition = () => {
        const wrapper = filterWrapper.current;
        const filterActive = wrapper.querySelector(".filter-gradient-text");
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

    useEffect(() => {
        setFilterBgPosition(getFilterPosition());
        if (onFilterChange) {
            onFilterChange(filter);
        }
    }, [filter, onFilterChange])
    return (
        <div>
            <div className="flex font-semibold px-10">
                <div className="mr-5 text-2xl">{title}</div>
                <div ref={filterWrapper} className="relative flex border border-black rounded-3xl">
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
            <CustomScrollbar style={{ width: '100%'}}
                 autoHeight
                 autoHeightMin={300}
                 autoHeightMax={450}>
                {children}
            </CustomScrollbar>
        </div>
    )
}

export default MovieCategory
