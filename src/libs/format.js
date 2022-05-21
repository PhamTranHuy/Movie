export const formatDay = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    date = new Date(date);
    return date.toLocaleDateString("en-US", options)
}