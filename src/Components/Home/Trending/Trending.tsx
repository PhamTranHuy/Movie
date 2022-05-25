import MovieCategory from "../../MovieCategory/MovieCategory"
import { TIME_FILTERS } from "../../../libs/MovieCategory";
import { useState, useEffect } from "react";
import { getTrending } from "../../../libs/Api";
import { formatMovieData } from "../../../libs/Format";
import MovieCard from "../../MovieCard/MovieCard";
import clsx from "clsx";

function Trending() {
    const OPACITY_DURATION = 500;
    const [movies, setMovies] = useState<any[]>();
    const [filter, setFilter] = useState();
    const [loaded, setLoaded] = useState<boolean>(false);

    const handleFilterChange = (filter: any) => {
        setFilter(filter);
    }

    useEffect(() => {
        if(!filter) return;
        const getMovies = async () => {
            const data = await getTrending(filter);
            const movies = formatMovieData(data.data.results);
            setLoaded(true);
            setTimeout(() => {
                setMovies(movies);
            }, OPACITY_DURATION)
        }
        try {
            getMovies();
        }
        catch (error) {
           console.error(error);
        }
    }, [filter])

    useEffect(() => {
        setLoaded(false);
    }, [movies]);

    return (
        <section style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/Home/trending-bg.svg'})`
        }} className="relative text-black pt-8 bg-no-repeat bg-bottom">
            <MovieCategory title="Trending" categoryFilter={TIME_FILTERS} onFilterChange={handleFilterChange}>
                <div style={{transition: `opacity ${OPACITY_DURATION}ms`}} 
                    className={clsx(
                        "flex mt-5 pb-5",
                        loaded ? "opacity-0" : "opacity-100"
                    )}>
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

export default Trending