interface props {
    title?: string
}

function MovieCategory({title}: props) {
  return (
    <div>
        <div className="flex font-semibold">
            <div className="mr-5 text-2xl">{title}</div>
            <div className="flex py-1 border rounded-3xl">
                <div className="px-5">On TV</div>
                <div className="px-5">In Theaters</div>
            </div>
        </div>
        <div>body</div>
    </div>
  )
}

export default MovieCategory
