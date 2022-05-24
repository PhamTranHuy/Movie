import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { getVideo } from '../../libs/Api';
import { formatTrailerVideo } from '../../libs/format';

interface props {
    name?: string,
    id?: number,
    img?: string,
    filter?: string,
    onMouseEnter?: (url?: string) => void
}
interface videoType {
    name?: string,
    id?: number
}

function TrailerCard({id, name, img, filter, onMouseEnter}: props) {
    const [video, setVideo] = useState<videoType>();

    const handleMouseEnter = () => {
        if (!onMouseEnter) return;
        onMouseEnter(img);
    }
    useEffect(() => {
        (async () => {
            const res = await getVideo(filter, id);
            const video = formatTrailerVideo(res.data.results);
            setVideo(video);
        })();
    }, [id, filter])

    return (
        <div className={clsx(
            "px-3",
            !video?.id && "hidden"
        )}>
            <div>
                <div className="relative w-[300px] h-[168px] mb-6 
                    rounded-lg transition duration-[400ms]
                    group hover:scale-[1.04]"
                    onMouseEnter={handleMouseEnter}>
                    <img alt='' src={img} className="rounded-lg"/>
                    <div className="absolute top-2 right-2 w-7 opacity-70 z-20 hover:opacity-100 hover:child:circle-menu-blue">
                        <img alt='' src={process.env.PUBLIC_URL + '/Home/circle-more.svg'} />
                    </div>
                    <div className="absolute inset-0 z-10 flex-center group-hover:child:scale-[1.25]">
                        <img className="w-16 invert transition duration-[400ms]" alt='' src={process.env.PUBLIC_URL + '/Home/play-icon.svg'} />
                    </div>
                </div>
                <div className="px-2 text-center">
                    <div className="font-bold text-xl">{name}</div>
                    <div className="text-white text-lg">{video?.name}</div>
                </div>
            </div>
        </div>
    )
}

export default TrailerCard