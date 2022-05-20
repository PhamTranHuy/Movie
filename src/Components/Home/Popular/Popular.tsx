import Movie from "../../Movie/Movie"
import MovieCategory from "../../MovieCategory/MovieCategory"

const MOVIES = [
    {
        name: 'name 1',
        img_url: '',
        point: ''
    }
]
function Popular() {
  return (
    <section className="text-black pt-8">
        <MovieCategory title="What's Popular">
            <div>
                {MOVIES.map((movie, id) => (
                    <div key={id}>
                        <Movie />
                    </div>
                ))}
            </div>
        </MovieCategory>
    </section>
  )
}

export default Popular