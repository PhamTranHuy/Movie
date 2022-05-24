import clsx from 'clsx';
import { useState, useEffect, ReactNode, useRef } from 'react';
import CustomScrollbar from '../CustomScrollbar/CustomScrollbar';

interface props {
    dark?: boolean,
    title?: string,
    children?: ReactNode,
    onFilterChange?: (filter: any) => void
}
export const FILTERS = ["On TV", "In Theaters"];

function MovieCategory({dark, title, children, onFilterChange}: props) {
    const [filter, setFilter] = useState<string>(FILTERS[0]);
    const [filterBgPosition, setFilterBgPosition] = useState<{}>();
    const filterWrapper = useRef<any>();

    const getFilterPosition = () => {
        const wrapper = filterWrapper.current;
        const filterActive = wrapper.querySelector(".active-text");
        if (!filterActive || !wrapper) return;
        const filterBounding = filterActive.getBoundingClientRect();
        const wrapperBounding = wrapper.getBoundingClientRect();
        return {
            left: filterBounding.left - wrapperBounding.left,
            width: filterBounding.width
        }
    }
    const getFilterClassStyle = (dark?: boolean, filter?: string, name?: string) => {
        if (filter === name) {
            if (dark) {
                return "dark active-text";
            } else {
                return "active-text";
            }
        } else {
            if (dark) {
                return "text-white";
            } else {
                return "text-darkBlue";
            }
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
                <div ref={filterWrapper} className={clsx(
                    "relative flex border rounded-3xl",
                    dark ? "border-[#26cda4]" : "border-black"
                )}>
                    {FILTERS.map((name, index) => (
                        <div key={index} 
                            style={{
                                transition: '-webkit-text-fill-color 0.5s'
                            }}
                            className={clsx(
                                getFilterClassStyle(dark, filter, name),
                                "flex-center px-5 rounded-3xl z-10 ml-[-1px]")}
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
                 autoHeightMax={450}>
                {children}
            </CustomScrollbar>
        </div>
    )
}

export default MovieCategory
