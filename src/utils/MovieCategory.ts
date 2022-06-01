export const TYPE_VIDEO_FILTERS = ["On TV", "In Theaters"];
export const TIME_FILTERS = ["Today", "This Week"];

export const getFilterPosition = (filterElement: any) => {
    const filterActive = filterElement?.querySelector(".active-text");
    if (!filterActive || !filterElement) return;
    const filterBounding = filterActive.getBoundingClientRect();
    const wrapperBounding = filterElement.getBoundingClientRect();
    return {
        left: filterBounding.left - wrapperBounding.left,
        width: filterBounding.width
    }
}
export const getFilterClassStyle = (dark?: boolean, filter?: string, name?: string) => {
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