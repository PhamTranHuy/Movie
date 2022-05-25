import MovieCategory from '../../MovieCategory/MovieCategory';
import { getLasted } from '../../../libs/Api';
import { formatTrailerData } from "../../../libs/Format";
import { useState, useEffect } from 'react';
import TrailerCard from '../../TrailerCard/TrailerCard';
import { TYPE_VIDEO_FILTERS } from '../../../libs/MovieCategory';
import clsx from "clsx";

function Lasted() {
    const OPACITY_DURATION = 500;
    const [trailers, setTrailers] = useState<any[]>();
    const [filter, setFilter] = useState<any>();
    const [bgUrl, setBgUrl] = useState<string | undefined>();
    const [loaded, setLoaded] = useState<boolean>(false);

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
            setLoaded(true);
            setTimeout(() => {
                setTrailers(trailers);
            }, OPACITY_DURATION)
        }
        try {
            getTrailers();
        }
        catch (error) {
           console.error(error);
        }
    }, [filter])

    useEffect(() => {
        setLoaded(false);
    }, [trailers]);

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
                <MovieCategory dark={true} title="Latest Trailers" 
                    categoryFilter={TYPE_VIDEO_FILTERS} onFilterChange={handleFilterChange}>
                    <div style={{transition: `opacity ${OPACITY_DURATION}ms`}} 
                        className={clsx(
                            "flex mt-5 pb-5",
                            loaded ? "opacity-0" : "opacity-100"
                        )}>
                        {trailers?.map((trailer, id) => (
                            <div key={id} className="first:ml-7">
                                <TrailerCard id={trailer.id} name={trailer.name} 
                                    img={trailer.img_url} filter={filter} 
                                    onMouseEnter={handleCardHover} />
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