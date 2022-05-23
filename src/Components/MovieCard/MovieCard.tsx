import { CircularProgressbar } from 'react-circular-progressbar';
import { formatDay } from '../../libs/format';

interface props {
    name?: string,
    date?: Date,
    img?: string,
    point?: number
}
const CircularProgressbarStyle = {
    root: {
        width: '38px',
    },
    background: {
        fill: '#081c22',
    },
    text: {
        fill: '#fff',
        fontSize: '32px',
        fontWeight: 'bold'
    }
}
function MovieCard({name, point, img, date}: props) {
    const getPathColor = (point?: number) => {
        if (!point) return; 
        if (point >= 70) {
            return '#21d07a'; // green
        } else if (point < 50) {
            return '#db2360'; // pink
        } else {
            return '#d2d530'; // yellow
        }    
    }
    const getTrailColor = (point?: number) => {
        if (!point) return; 
        if (point >= 70) {
            return '#21d07a66'; // dark green
        } else if (point < 50) {
            return '#571435'; // dark pink
        } else {
            return '#423d0f'; // dark yellow
        }    
    }
    return (
        <div className="mx-2">
            <div>
                <div className="relative w-[150px] h-[225px] mb-6 rounded-lg">
                        <img alt='' src={img} className="rounded-lg"/>
                        <div className="absolute bottom-[-20px] left-[10px]">
                            <CircularProgressbar value={point || 0} text={`${point}﹪` || `NR`} 
                                background
                                backgroundPadding={4}
                                styles={{
                                    ...CircularProgressbarStyle,
                                    path: {
                                        // Path color
                                        stroke: getPathColor(point),
                                        strokeWidth: 5
                                    },
                                    // Customize the circle behind the path, i.e. the "total progress"
                                    trail: {
                                        stroke: getTrailColor(point),
                                        strokeWidth: 5
                                    }
                                }}/>
                        </div>
                        <div className="absolute top-2 right-2 w-7 opacity-60 group">
                            <img className="group-hover:circle-menu-blue" alt='' src={process.env.PUBLIC_URL + '/Home/circle-more.svg'} />
                        </div>
                </div>
                <div className="px-2">
                    <div className="font-bold">{name}</div>
                    <div className="text-[#00000099]">{formatDay(date)}</div>
                </div>
            </div>
            
        </div>
    )
}

export default MovieCard