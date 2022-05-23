import { getPosterURL } from './Api';

export const formatDay = (date) => {
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

export const formatTrailerData = (data) => {
    const movies = data.map((movie) => {
        return {
            id: movie.id,
            name: movie.title || movie.name,
            img_url: getPosterURL(movie.backdrop_path)
        }
    });
    return movies;
}

export const formatTrailerVideo = (data) => {
    if (!data[0]) return {};
    return {
        id: data[0].id,  // lasted video's id in array = 0
        name: data[0].name
    }
    
}
