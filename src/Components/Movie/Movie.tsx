import { CircularProgressbar } from 'react-circular-progressbar';
import { formatDay } from '../../libs/format';

interface props {
    name?: string,
    date?: Date,
    img?: string,
    point?: number
}

function Movie({name, point, img, date}: props) {
  return (
    <div className="mx-2">
        <div>
            <div className="relative w-[150px] h-[225px] mb-6 rounded-lg">
                    <img alt='' src={img} className="rounded-lg"/>
                    <div className="absolute bottom-[-20px] left-[10px]">
                        <CircularProgressbar value={60} text={`${60}﹪`} 
                            background
                            backgroundPadding={6}
                            styles={{
                                root: {
                                    width: '42px',
                                },
                                background: {
                                    fill: '#081c22',
                                },
                                text: {
                                    // Text color
                                    fill: '#fff',
                                    // Text size
                                    fontSize: '32px',
                                    fontWeight: 'bold'
                                },
                                path: {
                                    // Path color
                                    stroke: `#21d07a`,
                                },
                                // Customize the circle behind the path, i.e. the "total progress"
                                trail: {
                                    stroke: '#21d07a66',
                                }
                        }}/>
                    </div>
                    <div className="absolute top-2 right-2 w-7 opacity-60 group">
                        <img className="group-hover:circle-menu-blue" alt='' src={process.env.PUBLIC_URL + '/Home/circle-more.svg'} />
                    </div>
            </div>
            <div className="pl-2">
                <div className="font-bold">{name}</div>
                <div className="text-[#00000099]">{formatDay(new Date())}</div>
            </div>
        </div>
        
    </div>
  )
}

export default Movie