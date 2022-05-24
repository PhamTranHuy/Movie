function Leaderboard() {

    return (
        <section className="text-black p-10">
            <div className="flex items-center mb-6">
                <h1 className="text-2xl font-semibold">Leaderboard</h1>
                <div className="text-sm ml-6">
                    <p className="flex items-center"><div className="w-2 h-2 mr-2 bg-linear-green rounded-full"/>All Time Edits</p>
                    <p className="flex items-center"><div className="w-2 h-2 mr-2 bg-linear-orange rounded-full"/>Edits This Week</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex items-center">
                    <div className="w-16 mr-3">
                        <img className="rounded-full" alt='' src={process.env.PUBLIC_URL + '/Home/leader-avatar.jpeg'} />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold text-lg">Name</p>
                        <div className="flex items-center h-2 mb-2">
                            <div className="w-full h-2 bg-linear-green rounded-full" />
                            <div className="text-sm font-bold">point</div>
                        </div>
                        <div className="flex items-center h-2">
                            <div className="w-full h-2 bg-linear-orange rounded-full" />
                            <div className="text-sm font-bold">point</div>
                        </div>
                    </div>
                </div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
            </div>
        </section>
    )
}

export default Leaderboard