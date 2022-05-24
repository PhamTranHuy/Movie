import MovieCard from "../../MovieCard/MovieCard"
import MovieCategory from "../../MovieCategory/MovieCategory"
import { getPopular } from "../../../libs/Api";
import { formatMovieData } from "../../../libs/Format";
import { useState, useEffect } from "react";
import { TYPE_VIDEO_FILTERS } from '../../../libs/MovieCategory';

function Popular() {
    const [movies, setMovies] = useState<any[]>();
    const [filter, setFilter] = useState();

    const handleFilterChange = (filter: any) => {
        setFilter(filter);
    }

    useEffect(() => {
        if(!filter) return;
        const getMovies = async () => {
            const data = await getPopular(filter);
            const movies = formatMovieData(data.data.results);
            setMovies(movies);
        }
        try {
            getMovies();
        }
        catch (error) {
           console.error(error);
        }
    }, [filter])
    return (
        <section className="text-black pt-8">
            <MovieCategory title="What's Popular" categoryFilter={TYPE_VIDEO_FILTERS} onFilterChange={handleFilterChange}>
                <div className="flex mt-5 pb-5">
                    {movies?.map((movie, id) => (
                        <div key={id} className="first:ml-7">
                            <MovieCard name={movie.name} img={movie.img_url} point={movie.point} date={movie.date}/>
                        </div>
                    ))}
                    <div id="space" className="pl-7" />
                </div>
            </MovieCategory>
        </section>
    )
}

export default Popular