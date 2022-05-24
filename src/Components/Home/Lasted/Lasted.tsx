import MovieCategory from '../../MovieCategory/MovieCategory';
import { getLasted } from '../../../libs/Api';
import { formatTrailerData } from "../../../libs/format";
import { useState, useEffect } from 'react';
import TrailerCard from '../../TrailerCard/TrailerCard';

function Lasted() {
    const [trailers, setTrailers] = useState<any[]>();
    const [filter, setFilter] = useState<any>();
    const [bgUrl, setBgUrl] = useState<string | undefined>();

    const handleFilterChange = (filter: any) => {
        setFilter(filter);
    }
    const handleCardHover = (url?: string) => {
        const bgUrl = url?.replace('w500', 'w780');
        setBgUrl(bgUrl);
    }

    useEffect(() => {
        if (!filter) return;
        const getTrailers = async () => {
            const data = await getLasted(filter);
            const trailers = formatTrailerData(data.data.results);
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
        <section 
            style={{
                backgroundImage: `url(${bgUrl})`,
                transition: `all 0.4s`
            }}
            className="bg-top bg-cover bg-no-repeat">
            <div className="w-full h-full pt-8"
                style={{
                    background: `linear-gradient(to right, rgba(3,37,65, 0.75) 0%, rgba(3,37,65, 0.75) 100%)`
                }}>
                <MovieCategory dark={true} title="Latest Trailers" onFilterChange={handleFilterChange}>
                    <div className="flex mt-5 pb-5">
                        {trailers?.map((trailer, id) => (
                            <div key={id} className="first:ml-7">
                                <TrailerCard id={trailer.id} name={trailer.name} 
                                    img={trailer.img_url} filter={filter} 
                                    onMouseEnter={handleCardHover}/>
                            </div>
                        ))}
                        <div id="space" className="pl-7" />
                    </div>
                </MovieCategory>
            </div>
        </section>
    )
}

export default Lasted