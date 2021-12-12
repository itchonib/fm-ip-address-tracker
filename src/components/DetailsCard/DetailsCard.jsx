import './DetailsCard.css'

const DetailsCard = () => {
    return (
        <div className="card-details__wrapper">
            <div className="card-details__pair">
                <p className="card-details__label"> Label </p> 
                <h3 className="card-details__info"> Info </h3> 
            </div>
            <div className="card-details__pair">
                <p className="card-details__label"> Label </p> 
                <h3 className="card-details__info"> Info </h3> 
            </div>
        </div>
    )
}

export default DetailsCard
