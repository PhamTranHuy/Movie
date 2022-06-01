const getLargestDurationAllTime = (leaderboard: Array<any>) => {
    const lergestDuration = leaderboard.reduce((largestDuration, leader) => {
        if (largestDuration > leader.all_time) {
            return largestDuration;
        } else {
            return leader.all_time;
        }
    }, 0)
    return lergestDuration;
}
const getLargestDurationThisWeek = (leaderboard: Array<any>) => {
    const lergestDuration = leaderboard.reduce((largestDuration, leader) => {
        if (largestDuration > leader.this_week) {
            return largestDuration;
        } else {
            return leader.this_week;
        }
    }, 0)
    return lergestDuration;
}

export const processLeaderboardData = (data: Array<any>) => {
    const largestDurationAllTime = getLargestDurationAllTime(data);
    const largestDurationThisWeek = getLargestDurationThisWeek(data);
    return data.map((leader) => {
        const allTimePercent = leader.all_time / largestDurationAllTime * 100;
        const thisWeekPercent = leader.this_week / largestDurationThisWeek * 100;
        return {
            ...leader,
            allTimePercent,
            thisWeekPercent
        }
    })
}

export const numberWithCommas = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}