import LEADER_BOARD from './data';
import { processLeaderboardData, numberWithCommas } from '../../../utils/Leaderboard';
import { useState, useEffect } from 'react';
function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState<any[]>();

    useEffect (() => {
        const processedData = processLeaderboardData(LEADER_BOARD);
        setLeaderboard(processedData);
    }, []);

    return (
        <section className="text-black p-10">
            <div className="flex items-center mb-6">
                <h1 className="text-2xl font-semibold">Leaderboard</h1>
                <div className="text-sm ml-6">
                    <div className="flex items-center"><div className="w-2 h-2 mr-2 bg-linear-green rounded-full"/>All Time Edits</div>
                    <div className="flex items-center"><div className="w-2 h-2 mr-2 bg-linear-orange rounded-full"/>Edits This Week</div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
                {leaderboard?.map((leader, i) => (
                    <div className="flex items-center" key={i}>
                        <div className="w-16 mr-3">
                            <img className="rounded-full" alt='' src={process.env.PUBLIC_URL + '/Home/leader-avatar.jpeg'} />
                        </div>
                        <div className="w-full">
                            <p className="font-semibold text-lg hover:text-[#2bd7aa]">{leader.name}</p>
                            <div className="flex items-center h-2 mb-2">
                                <div style={{ width: `${leader.allTimePercent}%` }} 
                                    className="w-full min-w-[40px] h-2 bg-linear-green rounded-full" />
                                <div className="text-sm font-bold ml-2">{numberWithCommas(leader.all_time)}</div>
                            </div>
                            <div className="flex items-center h-2">
                                <div style={{ width: `${leader.thisWeekPercent}%` }} 
                                    className="w-full min-w-[40px] h-2 bg-linear-orange rounded-full" />
                                <div className="text-sm font-bold ml-2">{numberWithCommas(leader.this_week)}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Leaderboard