import { getPosterURL } from './Api';

export const formatDay = (date) => {
    console.log(date);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", options)
}

export const formatMovieData = (data) => {
    const movies = data.map((movie) => {
        return {
            name: movie.title || movie.name,
            point: movie.vote_average * 10, // convert to percent
            img_url: getPosterURL(movie.poster_path),
            date: movie.first_air_date || movie.release_date
        }
    });
    return movies;
}