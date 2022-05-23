import axios from 'axios';
import { FILTERS } from '../Components/MovieCategory/MovieCategory';

const API_KEY = '25914d56a2a431c00e5c670c45661a2e';

export const getPopular = async (filter = FILTERS[0]) => {
    if (filter === FILTERS[0]) {
        return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
    } else {
        return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    }
}

export const getLasted = async (filter = FILTERS[0]) => {
    if (filter === FILTERS[0]) {
        return axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`)
    } else {
        return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
    }
}
export const getVideo = async (filter = FILTERS[0], videoId) => {
    if (filter === FILTERS[0]) {
        return axios.get(`https://api.themoviedb.org/3/tv/${videoId}/videos?api_key=${API_KEY}&language=en-US`);
    } else {
        return axios.get(`https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${API_KEY}&language=en-US`);
    }
}
export const getPosterURL = (path) => {
    return `https://image.tmdb.org/t/p/w500/${path}`
}