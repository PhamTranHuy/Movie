import Movie from "../../Movie/Movie"
import MovieCategory from "../../MovieCategory/MovieCategory"

const MOVIES = [
    {
        name: 'name 1',
        img_url: 'https://unsplash.it/150/225',
        point: 30
    },  {
        name: 'name 1',
        img_url: 'https://unsplash.it/150/225',
        point: 30
    }, {
        name: 'name 1',
        img_url: 'https://unsplash.it/150/225',
        point: 30
    }, {
        name: 'name 1',
        img_url: 'https://unsplash.it/150/225',
        point: 30
    }, {
        name: 'name 1',
        img_url: 'https://unsplash.it/150/225',
        point: 30
    },{
        name: 'name 1',
        img_url: 'https://unsplash.it/150/225',
        point: 30
    },{
        name: 'name 1',
        img_url: 'https://unsplash.it/150/225',
        point: 30
    }, {
        name: 'name 1',
        img_url: 'https://unsplash.it/150/225',
        point: 30
    }, {
        name: 'name 1',
        img_url: 'https://unsplash.it/150/225',
        point: 30
    }, {
        name: 'name 1',
        img_url: 'https://unsplash.it/150/225',
        point: 30
    }, {
        name: 'name 1',
        img_url: 'https://unsplash.it/150/225',
        point: 30
    }
]
function Popular() {
  return (
    <section className="text-black pt-8">
        <MovieCategory title="What's Popular">
            <div className="flex mt-5 pb-10">
                {MOVIES.map((movie, id) => (
                    <div key={id} className="first:ml-7">
                        <Movie name={movie.name} img={movie.img_url} point={movie.point}/>
                    </div>
                ))}
                <div id="space" className="pl-7" />
            </div>
        </MovieCategory>
    </section>
  )
}

export default Popular