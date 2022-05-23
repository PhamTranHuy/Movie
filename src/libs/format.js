import { getPosterURL } from './Api';

export const formatDay = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    date = new Date(date);
    return date.toLocaleDateString("en-US", options)
}

export const formatMovieData = (data) => {
    const movies = data.map((movie) => {
        return {
            name: movie.title || movie.name,
            point: movie.vote_average * 10,
            img_url: getPosterURL(movie.poster_path),
            date: movie.release_date
        }
    });
    return movies;
}