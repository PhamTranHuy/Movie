import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { getVideo } from '../../libs/Api';
import { formatTrailerVideo } from '../../libs/format';

interface props {
    name?: string,
    id?: number,
    img?: string,
    filter?: string
}
interface videoType {
    name?: string,
    id?: number
}

function TrailerCard({id, name, img, filter}: props) {
    const [video, setVideo] = useState<videoType>();
    useEffect(() => {
        (async () => {
            const res = await getVideo(filter, id);
            const video = formatTrailerVideo(res.data.results);
            console.log(video);
            setVideo(video);
        })()
    }, [id, filter])
    return (
        <div className={clsx(
            "mx-2",
            !video?.id && "hidden"
        )}>
            <div>
                <div className="relative w-[300px] h-[168px] mb-6 
                    rounded-lg transition
                    group hover:scale-[1.05]">
                    <img alt='' src={img} className="rounded-lg"/>
                    <div className="absolute top-2 right-2 w-7 opacity-60 z-20">
                        <img className="hover:circle-menu-blue" alt='' src={process.env.PUBLIC_URL + '/Home/circle-more.svg'} />
                    </div>
                    <div className="absolute inset-0 z-10 flex-center transition group-hover:scale-[1.25]">
                        <img className="w-16 invert" alt='' src={process.env.PUBLIC_URL + '/Home/play-icon.svg'} />
                    </div>
                </div>
                <div className="px-2 text-center">
                    <div className="font-bold">{name}</div>
                    <div className="text-[#00000099]">{video?.name}</div>
                </div>
            </div>
        </div>
    )
}

export default TrailerCard