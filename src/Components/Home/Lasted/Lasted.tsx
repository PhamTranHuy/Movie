import MovieCategory from '../../MovieCategory/MovieCategory';
import { getLasted } from '../../../libs/Api';
import { formatMovieData } from "../../../libs/format";
import { useState, useEffect } from 'react';
import TrailerCard from '../../TrailerCard/TrailerCard';

function Lasted() {
    const [trailers, setTrailers] = useState<any[]>();
    const [filter, setFilter] = useState();

    const handleFilterChange = (filter: any) => {
        setFilter(filter);
    }

    useEffect(() => {
        if (!filter) return;
        const getTrailers = async () => {
            const data = await getLasted(filter);
            const trailers = formatMovieData(data.data.results);
            setTrailers(trailers);
        }
        try {
            getTrailers();
        }
        catch (error) {
           console.error(error);
        }
    }, [filter])
    return (
        <section className="text-black pt-8">
            <MovieCategory title="Latest Trailers" onFilterChange={handleFilterChange}>
                <div className="flex mt-5 pb-10">
                    {trailers?.map((trailer, id) => (
                        <div key={id} className="first:ml-7">
                            <TrailerCard name={trailer.name} img={trailer.img_url} point={trailer.point} date={trailer.date}/>
                        </div>
                    ))}
                    <div id="space" className="pl-7" />
                </div>
            </MovieCategory>
        </section>
    )
}

export default Lasted