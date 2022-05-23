
interface props {
    name?: string,
    date?: Date,
    img?: string,
    point?: number
}

function TrailerCard({name, point, img, date}: props) {
    return (
        <div>trailer card</div>
    )
}

export default TrailerCard