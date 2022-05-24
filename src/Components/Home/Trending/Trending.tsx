import MovieCategory from "../../MovieCategory/MovieCategory"
import { TIME_FILTERS } from "../../../libs/MovieCategory";
function Trending() {
    return (
        <section className="text-black pt-8">
            <MovieCategory title="Trending" categoryFilter={TIME_FILTERS} onFilterChange={() => {}}>
                <div className="flex mt-5 pb-5">
                    {/* {movies?.map((movie, id) => (
                        <div key={id} className="first:ml-7">
                            <MovieCard name={movie.name} img={movie.img_url} point={movie.point} date={movie.date}/>
                        </div>
                    ))} */}
                    <div id="space" className="pl-7" />
                </div>
            </MovieCategory>
        </section>
    )
}

export default Trending