import clsx from 'clsx';
import { useState, useEffect, ReactNode, useRef } from 'react';
import CustomScrollbar from './CustomScrollbar';
import { getFilterPosition, getFilterClassStyle } from '../utils/MovieCategory';

interface props {
    dark?: boolean,
    title?: string,
    categoryFilter: Array<string>,
    children?: ReactNode,
    onFilterChange?: (filter: any) => void
}

function MovieCategory({dark, title, categoryFilter, children, onFilterChange}: props) {
    const [filter, setFilter] = useState<string>(categoryFilter[0]);
    const [filterBgPosition, setFilterBgPosition] = useState<{}>();
    const [scrolled, setScrolled] = useState(false);
    const filterWrapper = useRef<any>();

    const handleFilterClick = (e: any) => {
        setFilter(e.target.innerText);
    }
    const handleScrolling = (values: any) => {
        if (values.scrollLeft > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        setFilterBgPosition(getFilterPosition(filterWrapper.current));
        if (onFilterChange) {
            onFilterChange(filter);
        }
    }, [filter, onFilterChange])

    return (
        <div>
            <div className="flex font-semibold px-10">
                <div className="mr-5 text-2xl">{title}</div>
                <div ref={filterWrapper} className={clsx(
                    "relative flex border rounded-3xl",
                    dark ? "border-[#26cda4]" : "border-black"
                )}>
                    {categoryFilter.map((name, index) => (
                        <div key={index} 
                            style={{
                                transition: '-webkit-text-fill-color 0.5s'
                            }}
                            className={clsx(
                                getFilterClassStyle(dark, filter, name),
                                "flex-center px-5 rounded-3xl z-10 ml-[-1px] cursor-pointer")}
                            onClick={handleFilterClick}>{name}</div>
                    ))}
                    <div style={{
                            ...filterBgPosition,
                            transition: 'left 0.25s'
                        }} className={clsx(
                            dark ? "dark-pointer-filter" : "pointer-filter",
                            "absolute inset-0 z-0 rounded-3xl")}></div>
                </div>
            </div>
            <CustomScrollbar style={{ width: '100%'}}
                autoHeight
                autoHeightMin={300}
                autoHeightMax={450}
                onScrollFrame={handleScrolling}>
                {children}
            </CustomScrollbar>
            <div style={{
                opacity: scrolled ? '0' : '1',
                transition: `opacity 0.5s`
            }} className="absolute right-0 top-0 bottom-0 w-[60px] bg-linear-white" />
        </div>
    )
}

export default MovieCategory
